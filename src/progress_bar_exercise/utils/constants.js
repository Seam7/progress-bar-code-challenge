/**
 * Explanation:
 * Given 10 ticks equal 1s
 * 15s needs to be 90%
 * therefore 100% equals 16.66s
 * then we transform back to ticks by multiplying 16.66s * 10
 */
export const TOTAL_TICKS_NEEDED = 166.66;

// This comes from the 15s needs to be 90% constraint. 15s * 10 gives us the amount of ticks
export const TICKS_TO_STOP = 150;

// One tick equals 100ms.
export const TIME_TO_TICK = 100;
