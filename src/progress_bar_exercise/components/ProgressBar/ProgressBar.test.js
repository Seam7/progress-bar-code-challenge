import React from "react";
import { screen, render } from "@testing-library/react";
import ProgressBar from "./";

describe("ProgressBar", () => {
  it("dissapears when the isRequestComplete prop is true", () => {
    render(<ProgressBar isRequestComplete />);
    const progressBarElem = screen.getByTestId("progress-bar");

    expect(progressBarElem).toHaveStyle("opacity: 0");
  });

  it("shows the progress using the percentage prop", () => {
    render(<ProgressBar percentage={0.5} />);
    const progressBarFillElem = screen.getByTestId("progress-bar-fill");

    expect(progressBarFillElem).toHaveStyle("transform: scaleX(0.5)");
  });

  it("fills completly when the isRequestComplete prop is true, regardless of the current percentage", () => {
    render(<ProgressBar percentage={0.5} isRequestComplete />);
    const progressBarFillElem = screen.getByTestId("progress-bar-fill");

    expect(progressBarFillElem).toHaveStyle("transform: scaleX(1)");
  });
});
