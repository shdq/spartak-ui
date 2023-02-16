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
});
