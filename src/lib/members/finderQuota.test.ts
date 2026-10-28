import { describe, expect, it } from "vitest";
import { buildQuota, isUnlimitedMember, monthStartKst } from "../../../supabase/functions/product-finder/quota";

describe("AI finder usage limits", () => {
  it("guests (not signed in) get no tries", () => {
    expect(buildQuota("guest", 0).remaining).toBe(0);
  });

  it("members get 10 tries per month", () => {
    expect(buildQuota("member", 9).remaining).toBe(1);
    expect(buildQuota("member", 10).remaining).toBe(0);
  });

  it("songinjai@gmail.com is unlimited once the email is confirmed", () => {
    expect(isUnlimitedMember("songinjai@gmail.com", true)).toBe(true);
    expect(isUnlimitedMember("SongInJai@gmail.com", true)).toBe(true);
    expect(isUnlimitedMember("songinjai@gmail.com", false)).toBe(false);
    expect(isUnlimitedMember("someone@gmail.com", true)).toBe(false);
    expect(buildQuota("member", 500, true).remaining).toBeGreaterThan(0);
  });

  it("the month resets on the 1st in Korea time", () => {
    // 2026-10-31 16:00 UTC is already 2026-11-01 01:00 in Korea
    expect(monthStartKst(new Date("2026-10-31T16:00:00Z")).toISOString()).toBe("2026-10-31T15:00:00.000Z");
    expect(monthStartKst(new Date("2026-10-15T03:00:00Z")).toISOString()).toBe("2026-09-30T15:00:00.000Z");
  });
});
