import { TOTAL_TICKS_NEEDED } from "./constants";
import { ticksToScale, isProgressInBreakpoint } from "./helperFunctions";

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

describe("isProgressInBreakpoint", () => {
  it("returns a boolean telling us if the progress is around a breakpoint, with a tolerance of 1", () => {
    // All of these cases go like this => number * 100, we strip the decimals and compare against
    // the array of breakpoints with a tolerance. Examples below
    const breakpoints = [1, 5];
    const progress1 = 0.05; // 0.05 * 100 = 5. 5 is in the array of breakpoints
    const progress2 = 0.1; // 0.1 * 100 = 10. 10 is not in the array
    const progress3 = 0.004; // 0.004 * 100 with no decimals = 0, but given that there is a tolerance of 1 and that 1 is in the array, it returns true.

    expect(isProgressInBreakpoint(breakpoints, progress1)).toBe(true);
    expect(isProgressInBreakpoint(breakpoints, progress2)).toBe(false);
    expect(isProgressInBreakpoint(breakpoints, progress3)).toBe(true);
  });
});
