// Renders plain-text content with support for:
//  - Markdown image syntax: ![alt](url)
//  - Bare http(s) URLs → clickable links
//  - Preserves whitespace / line breaks
import React from "react";

const TOKEN_RE = /(!\[[^\]]*\]\((https?:\/\/[^\s)]+)\))|(https?:\/\/[^\s<]+)/g;

interface Props {
  text: string;
}

const RichContent: React.FC<Props> = ({ text }) => {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      // image
      const url = match[2];
      nodes.push(
        <img
          key={key++}
          src={url}
          alt=""
          loading="lazy"
          className="my-3 max-h-[600px] max-w-full rounded-lg border border-border"
        />
      );
    } else if (match[3]) {
      const url = match[3];
      nodes.push(
        <a
          key={key++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary-glow break-all"
        >
          {url}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return (
    <div className="whitespace-pre-wrap break-words text-[15px] leading-relaxed text-foreground">
      {nodes}
    </div>
  );
};

export default RichContent;
