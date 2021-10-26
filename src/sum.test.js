import { sum } from "./sum";

describe("sum", () => {
  it("returns 3 for (1, 2)", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
