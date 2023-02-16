import { render, screen, within } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  test("should renders", () => {
    // Arrange
    render(<TextInput />);
    const input = screen.getByRole("textbox");

    // Act & Assert
    expect(input).toBeInTheDocument();
  });

  test("should have placeholder", () => {
    // Arrange
    render(<TextInput placeholder="My placeholder" />);
    const input = screen.getByRole("textbox");

    // Act & Assert
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "My placeholder");
  });

  test("should be focusable", () => {
    // Arrange
    render(<TextInput />);
    const input = screen.getByRole("textbox");

    // Act & Assert
    input.focus();
    expect(input).toHaveFocus();

    input.blur();
    expect(input).not.toHaveFocus();
  });

  test("should be disabled", () => {
    // Arrange
    render(<TextInput disabled />);

    // Act
    const input = screen.getByRole("textbox");

    // Assert
    expect(input).toBeDisabled();
  });
});
