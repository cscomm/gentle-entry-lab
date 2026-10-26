import React from "react";
import { cn } from "@/lib/utils";
import { splitParagraphs } from "@/lib/paragraphs";

type Props = React.HTMLAttributes<HTMLParagraphElement> & { children?: React.ReactNode };

const HANGUL = /[\uac00-\ud7af]/;

/**
 * Drop-in replacement for <p> around long body copy.
 * String children are split into readable paragraphs (line breaks + long
 * sentences). Short text renders exactly like the original <p>.
 */
export default function Prose({ children, className, ...rest }: Props) {
  if (typeof children !== "string") {
    return (
      <p className={className} {...rest}>
        {children}
      </p>
    );
  }
  const keep = HANGUL.test(children) ? "break-keep" : undefined;
  const paras = splitParagraphs(children);
  if (paras.length <= 1) {
    return (
      <p className={cn(className, keep)} {...rest}>
        {paras[0] ?? children}
      </p>
    );
  }
  return (
    <div className={cn(className, keep, "[&>p+p]:mt-[0.9em]")} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
      {paras.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
