import { expect, it } from "vitest";
import { CONTACT_MESSAGE_LIMIT, limitContactMessage } from "./contactLimits";

it("allows 2000 inquiry characters and cuts off only the excess", () => {
  expect(CONTACT_MESSAGE_LIMIT).toBe(2000);
  expect(limitContactMessage("가".repeat(2000))).toHaveLength(2000);
  expect(limitContactMessage("가".repeat(2001))).toHaveLength(2000);
});