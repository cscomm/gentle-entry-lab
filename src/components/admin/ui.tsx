import { useState } from "react";
import type { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { num } from "./shared";

const NUMERIC_TEXT = /^[0-9.,]*$/;

/**
 * Numeric text field that keeps the exact keystrokes while focused, so typing a
 * decimal ("1.", "1.5") is never swallowed by re-formatting the parsed number.
 * The parsed value is reported on every change; the raw text is dropped on blur.
 */
export const NumberInput = ({
  value,
  onValueChange,
  placeholder,
  className = "",
}: {
  value: number | null | undefined;
  onValueChange: (v: number) => void;
  placeholder?: string;
  className?: string;
}) => {
  const [raw, setRaw] = useState<string | null>(null);
  const current = value ?? 0;
  const shown =
    raw !== null ? (num(raw) === current ? raw : String(current)) : current === 0 ? "" : String(current);
  return (
    <Input
      inputMode="decimal"
      placeholder={placeholder}
      value={shown}
      onChange={(e) => {
        const text = e.target.value;
        if (!NUMERIC_TEXT.test(text)) return;
        setRaw(text);
        onValueChange(num(text));
      }}
      onBlur={() => setRaw(null)}
      className={className}
    />
  );
};

export const Panel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-xl border bg-background p-5 ${className}`}>{children}</div>
);

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</h3>
);

export const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="block">
    <span className="mb-1 block text-[11px] font-medium text-muted-foreground">{label}</span>
    {children}
  </label>
);

export const selectCls =
  "h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const Select = ({
  value,
  onChange,
  options,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className={`${selectCls} ${className}`}>
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);

export const Badge = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] ${className}`}>{children}</span>
);

export const Pills = <T extends string>({
  value,
  onChange,
  items,
}: {
  value: T;
  onChange: (v: T) => void;
  items: { key: T; label: string; count?: number }[];
}) => (
  <div className="flex flex-wrap items-center gap-2">
    {items.map((it) => (
      <button
        key={it.key}
        onClick={() => onChange(it.key)}
        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
          value === it.key
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-muted-foreground hover:text-foreground"
        }`}
      >
        {it.label}
        {it.count !== undefined ? <span className="ml-1 opacity-70">{it.count}</span> : null}
      </button>
    ))}
  </div>
);

export const Empty = ({ children }: { children: ReactNode }) => (
  <p className="rounded-xl border bg-background p-6 text-center text-sm text-muted-foreground">{children}</p>
);
