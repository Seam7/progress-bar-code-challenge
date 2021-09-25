import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import useBreakPoints from "./useBreakPoints";

/**
 * Choosing the approach of testing a hook by creating a component that interacts with it
 * so we don't need to install a new dependency (react-hooks-testing-library)
 */
const MockComponentUsingBreakPoints = () => {
  const { breakPointsValue, handleBreakPointsChange, breakPointsArray } =
    useBreakPoints();

  return (
    <>
      <input
        type="text"
        onChange={handleBreakPointsChange}
        data-testid="mock-input"
      />
      <p>{breakPointsValue}</p>
      <p>{JSON.stringify(breakPointsArray)}</p>
    </>
  );
};

describe("Button", () => {
  it("applies the correct variant when one is passed", () => {
    render(<MockComponentUsingBreakPoints />);
    const inputElem = screen.getByTestId("mock-input");

    fireEvent.change(inputElem, { target: { value: "2, 3" } });
    expect(screen.getByText("2, 3")).toBeInTheDocument();
    expect(screen.getByText("[2,3]")).toBeInTheDocument();
  });
});
