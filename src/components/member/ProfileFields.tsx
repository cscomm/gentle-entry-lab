import { useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/lib/router";
import { useLang } from "@/contexts/LanguageContext";
import { mt } from "@/lib/members/text";
import type { MemberProfile } from "@/lib/members/client";
import AddressFields from "./AddressFields";

export type Consent = { terms: boolean; privacy: boolean };

type Props = {
  value: MemberProfile;
  onChange: (v: MemberProfile) => void;
  consent?: Consent;
  onConsent?: (c: Consent) => void;
};

const Field = ({ label, children, required = true }: { label: string; children: React.ReactNode; required?: boolean }) => (
  <div>
    <span className="mb-1.5 block text-sm font-semibold text-foreground">
      {label}
      {required && <span className="ml-0.5 text-destructive">*</span>}
    </span>
    {children}
  </div>
);

const ProfileFields = ({ value, onChange, consent, onConsent }: Props) => {
  const { lang } = useLang();
  const set = (patch: Partial<MemberProfile>) => onChange({ ...value, ...patch });
  const onAddress = useCallback(
    (patch: Partial<MemberProfile>) => onChange({ ...value, ...patch }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={mt(lang, "name")}>
          <Input value={value.full_name} onChange={(e) => set({ full_name: e.target.value.slice(0, 40) })} required autoComplete="name" />
        </Field>
        <Field label={mt(lang, "phone")}>
          <Input
            type="tel"
            value={value.phone}
            onChange={(e) => set({ phone: e.target.value.slice(0, 30) })}
            required
            autoComplete="tel"
            placeholder="010-0000-0000"
          />
        </Field>
      </div>
      <Field label={mt(lang, "company")}>
        <Input value={value.company} onChange={(e) => set({ company: e.target.value.slice(0, 80) })} required autoComplete="organization" />
      </Field>
      <Field label={mt(lang, "address")}>
        <AddressFields zipcode={value.zipcode} address={value.address} detail={value.address_detail} onChange={onAddress} />
      </Field>

      {consent && onConsent && (
        <div className="space-y-2.5 rounded-xl border border-border bg-secondary/30 p-4">
          <label className="flex cursor-pointer items-center gap-2.5 border-b border-border pb-2.5 text-sm font-semibold text-foreground">
            <Checkbox
              checked={consent.terms && consent.privacy}
              onCheckedChange={(c) => onConsent({ terms: c === true, privacy: c === true })}
            />
            {mt(lang, "agreeAll")}
          </label>
          {(["terms", "privacy"] as const).map((k) => (
            <div key={k} className="flex items-center justify-between gap-2 text-sm">
              <label className="flex cursor-pointer items-center gap-2.5 text-foreground">
                <Checkbox checked={consent[k]} onCheckedChange={(c) => onConsent({ ...consent, [k]: c === true })} />
                {mt(lang, k === "terms" ? "agreeTerms" : "agreePrivacy")}
              </label>
              <Link to={k === "terms" ? "/terms/" : "/privacy/"} target="_blank" className="text-xs text-primary underline-offset-2 hover:underline">
                {mt(lang, "view")}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileFields;
