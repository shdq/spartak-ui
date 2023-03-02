import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../index";

describe("Checkbox", () => {
  test("should renders", () => {
    // Arrange
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).toBeInTheDocument();
  });

  test("should be checked by default", () => {
    // Arrange
    render(<Checkbox defaultChecked />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).toBeChecked();
  });

  test("should be checked on click", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
