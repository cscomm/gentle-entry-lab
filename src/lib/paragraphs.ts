// Splits long body copy into readable paragraphs.
// 1) Explicit line breaks always start a new paragraph.
// 2) Blocks longer than a threshold are split at sentence ends and
//    regrouped so each paragraph is a comfortable length.
// Implemented without regex lookbehind so older Safari can parse it.

const ABBR = /(?:^|[\s(])(?:e\.g|i\.e|approx|typ|Co|Ltd|Inc|vs|No|Fig|cf|St|Mr|Dr|Ref|min|max)$/i;

const CJK = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g;

function isCjkText(text: string): boolean {
  const cjk = (text.match(CJK) || []).length;
  return cjk > text.length * 0.2;
}

export function splitSentences(text: string): string[] {
  const out: string[] = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "。" || c === "！" || c === "？") {
      let end = i + 1;
      // keep closing brackets/quotes with the sentence
      while (end < text.length && /[」』）)"'”]/.test(text[end])) end++;
      out.push(text.slice(start, end));
      start = end;
      i = end - 1;
      continue;
    }
    if (c === "." || c === "!" || c === "?") {
      const next = text[i + 1];
      // decimals (1.5), URLs, file names, end of text → not a split point here
      if (next === undefined || !/\s/.test(next)) continue;
      let j = i + 1;
      while (j < text.length && /\s/.test(text[j])) j++;
      if (j >= text.length) continue;
      const after = text[j];
      if (c === "." && ABBR.test(text.slice(start, i))) continue;
      // English mid-sentence lowercase continuation (e.g. "approx. value")
      if (/[a-z]/.test(after)) continue;
      out.push(text.slice(start, i + 1));
      start = j;
      i = j - 1;
    }
  }
  if (start < text.length) out.push(text.slice(start));
  return out.map((s) => s.trim()).filter(Boolean);
}

export function splitParagraphs(text: string): string[] {
  const blocks = text
    .split(/\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  const result: string[] = [];
  for (const block of blocks) {
    const cjk = isCjkText(block);
    const threshold = cjk ? 140 : 260;
    const minChunk = cjk ? 60 : 120;
    if (block.length <= threshold) {
      result.push(block);
      continue;
    }
    const sentences = splitSentences(block);
    if (sentences.length < 2) {
      result.push(block);
      continue;
    }
    const sep = cjk && /[。！？]$/.test(sentences[0]) && !/\s/.test(block) ? "" : " ";
    const chunks: string[] = [];
    let cur = "";
    for (const s of sentences) {
      cur = cur ? cur + sep + s : s;
      if (cur.length >= minChunk) {
        chunks.push(cur);
        cur = "";
      }
    }
    if (cur) {
      if (chunks.length && cur.length < minChunk * 0.6) chunks[chunks.length - 1] += sep + cur;
      else chunks.push(cur);
    }
    result.push(...chunks);
  }
  return result;
}
