CREATE OR REPLACE FUNCTION public.reserve_guest_finder_trial(p_device_id text, p_ip_hash text, p_query text, p_lang text, p_user_agent text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE result_id uuid;
BEGIN
  IF p_device_id IS NULL OR p_ip_hash IS NULL OR length(p_query) < 4 OR length(p_query) > 2000 OR p_lang NOT IN ('ko','en','ja') THEN RAISE EXCEPTION 'invalid guest request'; END IF;
  PERFORM pg_advisory_xact_lock(hashtextextended('finder-ip:' || p_ip_hash, 0));
  PERFORM pg_advisory_xact_lock(hashtextextended('finder-device:' || p_device_id, 0));
  IF EXISTS (SELECT 1 FROM public.product_finder_logs WHERE member_id IS NULL AND status <> 'error' AND (guest_device_id = p_device_id OR guest_ip_hash = p_ip_hash)) THEN RETURN NULL; END IF;
  INSERT INTO public.product_finder_logs(query,lang,status,guest_device_id,guest_ip_hash,user_agent) VALUES(p_query,p_lang,'pending',p_device_id,p_ip_hash,left(p_user_agent,300)) RETURNING id INTO result_id;
  RETURN result_id;
END;
$$;
REVOKE ALL ON FUNCTION public.reserve_guest_finder_trial(text,text,text,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reserve_guest_finder_trial(text,text,text,text,text) TO service_role;
CREATE INDEX IF NOT EXISTS finder_guest_device_idx ON public.product_finder_logs(guest_device_id) WHERE member_id IS NULL;
CREATE INDEX IF NOT EXISTS finder_guest_ip_idx ON public.product_finder_logs(guest_ip_hash) WHERE member_id IS NULL;