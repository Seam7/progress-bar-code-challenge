import React, { useState, useEffect } from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from "./components/ProgressBar";
import Button from "./components/Button";
import { ticksToScale } from "./utils/helperFunctions";
import { TOTAL_TICKS_NEEDED } from "./utils/constants";
import { TICKS_TO_STOP, TIME_TO_TICK } from "./utils/constants";
import BreakPoints from "./components/BreakPoints";
import useBreakPoints from "./components/BreakPoints/useBreakPoints";
import "./ProgressBarExercise.scss";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------
const Solution = () => {
  const [isRequestActive, setIsRequestActive] = useState(false);

  const [ticksPassedSinceRequestStarted, setTicksPassedSinceRequestStarted] =
    useState(0);
  const [isRequestComplete, setIsRequestComplete] = useState(false);

  const { breakPointsValue, handleBreakPointsChange, breakPointsArray } =
    useBreakPoints();

  useEffect(() => {
    if (isRequestActive && ticksPassedSinceRequestStarted < TICKS_TO_STOP) {
      const timeRef = setTimeout(() => {
        setTicksPassedSinceRequestStarted((prevTicks) => prevTicks + 1);
      }, TIME_TO_TICK);
      return () => clearTimeout(timeRef);
    }
  }, [isRequestActive, ticksPassedSinceRequestStarted]);

  const handleFinishRequest = () => {
    setIsRequestActive(false);
    setIsRequestComplete(true);
    setTicksPassedSinceRequestStarted(0);
  };

  return (
    <div className="solution-container">
      <ProgressBar
        percentage={ticksToScale(
          ticksPassedSinceRequestStarted,
          TOTAL_TICKS_NEEDED
        )}
        isRequestComplete={isRequestComplete}
        breakPoints={breakPointsArray}
      />
      <BreakPoints
        breakPointsValue={breakPointsValue}
        handleBreakPointsChange={handleBreakPointsChange}
      />
      <div className="solution__buttons-container">
        <Button
          variant="start"
          onClick={() => setIsRequestActive(true)}
          disabled={isRequestActive}
        >
          {isRequestActive ? "LOADING..." : "START REQUEST"}
        </Button>
        <Button variant="finish" onClick={handleFinishRequest}>
          FINISH REQUEST
        </Button>
      </div>
    </div>
  );
};
