import { TOTAL_TICKS_NEEDED } from "./constants";
import { ticksToScale } from "./helperFunctions";

describe("ticksToScale", () => {
  it("transforms the given ticks into a float in the range of 0-1", () => {
    const tick1 = 10;
    const tick2 = 14;
    const tick3 = 150;
    const tick4 = TOTAL_TICKS_NEEDED;

    expect(ticksToScale(tick1, TOTAL_TICKS_NEEDED)).toBe(0.06000240009600384);
    expect(ticksToScale(tick2, TOTAL_TICKS_NEEDED)).toBe(0.08400336013440537);
    expect(ticksToScale(tick3, TOTAL_TICKS_NEEDED)).toBe(0.9000360014400576);
    expect(ticksToScale(tick4, TOTAL_TICKS_NEEDED)).toBe(1);
  });
});
