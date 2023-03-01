import { render, screen } from "@testing-library/react";
import { Checkbox } from "../index";

describe("Checkbox", () => {
  test("should renders", () => {
    // Arrange
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).toBeInTheDocument();
  });
});
