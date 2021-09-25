import { AROUND_TOLERANCE } from "./constants";

/**
 *
 * @param {*} ticks An integer between 0 and 150 denoting the amount of ticks.
 * @returns A float number between 0 and 1
 */
export const ticksToScale = (ticks, scaleMax) => {
  return ticks / scaleMax;
};

/**
 *
 * @param {*} breakPoints An array of integers between 0 and 90
 * @param {*} progress A float between 0 and 1
 * @returns Boolean denoting if the progress is "around" a breakpoint
 */

// Assumption / To be clarified: Breakpoints have to be an integer number between 0 and 90
export const isProgressInBreakpoint = (breakPoints = [], progress) => {
  const currentProgressInPercentage = parseInt(progress * 100);
  return Boolean(
    breakPoints.find(
      (point) =>
        Math.abs(point - currentProgressInPercentage) <= AROUND_TOLERANCE
    )
  );
};
