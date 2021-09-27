import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("calls the function passed when the button is clicked", () => {
    const mockOnClickCallback = jest.fn();
    render(<Button onClick={mockOnClickCallback} />);
    const buttonElem = screen.getByTestId("button--");

    fireEvent.click(buttonElem);

    expect(mockOnClickCallback).toHaveBeenCalledTimes(1);
  });

  it("applies the correct variant when one is passed", () => {
    render(<Button variant="test" />);
    const buttonElem = screen.getByTestId("button--test");

    expect(buttonElem).toBeInTheDocument();
  });
});
