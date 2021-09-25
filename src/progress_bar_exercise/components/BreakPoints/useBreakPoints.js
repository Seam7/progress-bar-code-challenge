import { useState, useMemo } from "react";

const useBreakPoints = () => {
  const [breakPointsValue, setBreakPointsValue] = useState("");

  /*
   * Hacky way to let this function receive an event when writing on the input
   * and setting the content to empty when we disable the checkbox
   */
  const handleBreakPointsChange = (e = undefined) => {
    setBreakPointsValue(e?.target.value || "");
  };

  const breakPointsArray = useMemo(() => {
    return breakPointsValue
      .replace(" ", "")
      .split(",")
      .map((number) => parseInt(number));
  }, [breakPointsValue]);

  return {
    breakPointsValue,
    handleBreakPointsChange,
    breakPointsArray,
  };
};

export default useBreakPoints;
