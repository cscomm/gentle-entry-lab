GRANT SELECT ON public.post_translations TO anon, authenticated;
GRANT ALL ON public.post_translations TO service_role;
CREATE INDEX IF NOT EXISTS post_translations_post_lang_idx ON public.post_translations(post_id, lang);