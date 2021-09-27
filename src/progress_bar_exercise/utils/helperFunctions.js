/**
 *
 * @param {*} ticks An integer between 0 and 150 denoting the amount of ticks.
 * @returns A float number between 0 and 1
 */
export const ticksToScale = (ticks, scaleMax) => {
  return ticks / scaleMax;
};
