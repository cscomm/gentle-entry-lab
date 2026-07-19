
CREATE TABLE public.post_translations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  lang TEXT NOT NULL CHECK (lang IN ('en','ja')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (post_id, lang)
);
GRANT SELECT ON public.post_translations TO anon, authenticated;
GRANT ALL ON public.post_translations TO service_role;
ALTER TABLE public.post_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "post translations readable by all"
  ON public.post_translations FOR SELECT
  USING (true);
