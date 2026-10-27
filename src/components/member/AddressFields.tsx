import { useEffect, useRef, useState } from "react";
import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang } from "@/contexts/LanguageContext";
import { mt } from "@/lib/members/text";

const POSTCODE_SRC = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

type PostcodeData = { zonecode: string; roadAddress: string; jibunAddress: string; buildingName: string; apartment: string };
type DaumWindow = Window & { daum?: { Postcode: new (o: { oncomplete: (d: PostcodeData) => void; width?: string; height?: string }) => { embed: (el: HTMLElement) => void } } };

let loader: Promise<void> | null = null;
const loadPostcode = () => {
  if ((window as DaumWindow).daum?.Postcode) return Promise.resolve();
  loader ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = POSTCODE_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      loader = null;
      reject(new Error("postcode load failed"));
    };
    document.head.appendChild(s);
  });
  return loader;
};

type Props = {
  zipcode: string;
  address: string;
  detail: string;
  onChange: (v: { zipcode?: string; address?: string; address_detail?: string }) => void;
};

/** Korean address search (Daum postcode, embedded) plus manual fields for overseas addresses. */
const AddressFields = ({ zipcode, address, detail, onChange }: Props) => {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    loadPostcode()
      .then(() => {
        const D = (window as DaumWindow).daum;
        if (cancelled || !boxRef.current || !D) return;
        boxRef.current.innerHTML = "";
        new D.Postcode({
          width: "100%",
          height: "100%",
          oncomplete: (d) => {
            const extra = d.buildingName && d.apartment === "Y" ? ` (${d.buildingName})` : "";
            onChange({ zipcode: d.zonecode, address: (d.roadAddress || d.jibunAddress) + extra });
            setOpen(false);
            setTimeout(() => detailRef.current?.focus(), 50);
          },
        }).embed(boxRef.current);
      })
      .catch(() => setOpen(false));
    return () => {
      cancelled = true;
    };
  }, [open, onChange]);

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          aria-label={mt(lang, "zipcode")}
          placeholder={mt(lang, "zipcode")}
          value={zipcode}
          onChange={(e) => onChange({ zipcode: e.target.value.slice(0, 20) })}
          className="w-32"
        />
        <Button type="button" variant="outline" onClick={() => setOpen((v) => !v)} className="gap-1.5">
          {open ? <X className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
          {open ? mt(lang, "addressClose") : mt(lang, "addressSearch")}
        </Button>
      </div>
      {open && <div ref={boxRef} className="h-[420px] overflow-hidden rounded-lg border border-border" />}
      <Input
        aria-label={mt(lang, "address")}
        placeholder={mt(lang, "address")}
        value={address}
        onChange={(e) => onChange({ address: e.target.value.slice(0, 200) })}
        required
      />
      <Input
        ref={detailRef}
        aria-label={mt(lang, "addressDetail")}
        placeholder={mt(lang, "addressDetail")}
        value={detail}
        onChange={(e) => onChange({ address_detail: e.target.value.slice(0, 120) })}
      />
      <p className="text-xs text-muted-foreground">{mt(lang, "addressManual")}</p>
    </div>
  );
};

export default AddressFields;
