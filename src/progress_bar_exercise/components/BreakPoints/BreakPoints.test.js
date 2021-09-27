import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BreakPoints from "./";

describe("BreakPoints", () => {
  it("does not show the input when the checkbox is unchecked", () => {
    render(<BreakPoints />);
    const inputElem = screen.getByTestId("break-points-input");

    expect(inputElem).toBeInTheDocument();
    expect(inputElem).not.toHaveClass("break-points__input--show");
  });

  it("shows the input when the user clicks on the checkbox", () => {
    render(<BreakPoints />);
    const inputElem = screen.getByTestId("break-points-input");
    const checkboxElem = screen.getByTestId("break-points-checkbox");

    fireEvent.click(checkboxElem);
    expect(inputElem).toBeInTheDocument();
    expect(inputElem).toHaveClass("break-points__input--show");
  });

  it("has the value passed as props", () => {
    const testValue = "this is a test value";
    render(
      <BreakPoints
        breakPointsValue={testValue}
        handleBreakPointsChange={() => {}}
      />
    );
    const inputWithValueElem = screen.getByDisplayValue(testValue);

    expect(inputWithValueElem).toBeInTheDocument();
  });
});
