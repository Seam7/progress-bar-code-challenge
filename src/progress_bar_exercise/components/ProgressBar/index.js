import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ percentage, isRequestComplete }) => {
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
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
