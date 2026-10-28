CREATE TABLE public.member_profiles (
  member_id uuid PRIMARY KEY,
  account_email text,
  contact_email text,
  provider text,
  full_name text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  zipcode text NOT NULL DEFAULT '',
  address text NOT NULL DEFAULT '',
  address_detail text NOT NULL DEFAULT '',
  terms_agreed_at timestamptz,
  signed_up_at timestamptz,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.member_profiles IS 'Copy of member profiles from the external sign-up server. Written only by the member-api edge function after verifying the member token; read by admin-crm.';

GRANT ALL ON public.member_profiles TO service_role;

ALTER TABLE public.member_profiles ENABLE ROW LEVEL SECURITY;

CREATE INDEX member_profiles_created_at_idx ON public.member_profiles (created_at DESC);

CREATE TRIGGER member_profiles_set_updated_at
BEFORE UPDATE ON public.member_profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();