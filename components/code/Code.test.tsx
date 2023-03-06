import { render, screen } from "@testing-library/react";
import { Code } from "./Code";

describe("Code", () => {
  test("should renders", () => {
    // Arrange
    render(<Code>nums[i]</Code>);

    // Act
    const code = screen.getByText("nums[i]");

    // Assert
    expect(code).toBeInTheDocument();
  });

  test("should renders as <code>", () => {
    // Arrange
    render(<Code>nums[i]</Code>);

    // Act
    const code = screen.getByText((text, element) => {
      return element?.tagName.toLowerCase() === "code" && text === "nums[i]";
    });

    // Assert
    expect(code).toBeInTheDocument();
  });
});
