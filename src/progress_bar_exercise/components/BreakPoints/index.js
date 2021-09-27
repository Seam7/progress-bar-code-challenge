import React, { useState } from "react";
import "./BreakPoints.scss";

const BreakPoints = ({ breakPointsValue, handleBreakPointsChange }) => {
  const [allowProgressBarBreakPoints, setAllowProgressBarBreakPoints] =
    useState(false);

  const handleShowBreakPointsChange = () => {
    if (allowProgressBarBreakPoints) {
      handleBreakPointsChange();
    }
    setAllowProgressBarBreakPoints((prevCheckState) => !prevCheckState);
  };
  return (
    <div className="break-points">
      <div>
        <label htmlFor="allowBreakPoints">Break Points</label>
        <input
          id="allowBreakPoints"
          data-testid="break-points-checkbox"
          type="checkbox"
          checked={allowProgressBarBreakPoints}
          onChange={handleShowBreakPointsChange}
        />
      </div>
      <input
        type="text"
        className={`break-points__input ${
          allowProgressBarBreakPoints ? "break-points__input--show" : ""
        }`}
        data-testid="break-points-input"
        value={breakPointsValue}
        onChange={handleBreakPointsChange}
        placeholder="5, 15, 20, 70"
      />
    </div>
  );
};

export default BreakPoints;
