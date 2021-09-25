import React from "react";
import { ANIMATION_TIME } from "../../utils/constants";
import { isProgressInBreakpoint } from "../../utils/helperFunctions";
import "./ProgressBar.scss";

const ProgressBar = ({ percentage, isRequestComplete, breakPoints }) => {
  return (
    <div
      className="progress-bar"
      data-testid="progress-bar"
      style={{
        opacity: `${isRequestComplete ? 0 : 1}`,
      }}
    >
      <div
        className="progress-bar__fill"
        data-testid="progress-bar-fill"
        style={{
          transform: `scaleX(${isRequestComplete ? 1 : percentage})`,
          transition: `transform ${
            isProgressInBreakpoint(breakPoints, percentage) &&
            !isRequestComplete
              ? ANIMATION_TIME.SLOW
              : ANIMATION_TIME.NORMAL
          }s linear`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
