import { describe, expect, it } from "vitest";
import { EMPTY_PROFILE, isProfileComplete, profileFromMeta, safeNext } from "./client";

const full = { ...EMPTY_PROFILE, full_name: "홍길동", company: "주식회사 비에이알", phone: "010-1234-5678", address: "서울 금천구 시흥대로73길 11", terms_agreed_at: "2026-10-27T00:00:00Z" };

describe("member profile rules", () => {
  it("needs name, company, phone, address and terms consent", () => {
    expect(isProfileComplete(full)).toBe(true);
    for (const k of ["full_name", "company", "phone", "address", "terms_agreed_at"] as const) {
      expect(isProfileComplete({ ...full, [k]: "" })).toBe(false);
    }
  });

  it("address detail and postal code are optional", () => {
    expect(isProfileComplete({ ...full, zipcode: "", address_detail: "" })).toBe(true);
  });

  it("uses the Google/Kakao name when no name was entered", () => {
    expect(profileFromMeta({ name: "Kim" }).full_name).toBe("Kim");
    expect(profileFromMeta({ nickname: "카카오" }).full_name).toBe("카카오");
  });
});

describe("safeNext", () => {
  it("only allows paths on this site", () => {
    expect(safeNext("/guide/finder/")).toBe("/guide/finder/");
    expect(safeNext("//evil.com")).toBeNull();
    expect(safeNext("https://evil.com")).toBeNull();
    expect(safeNext(null)).toBeNull();
  });
});
