import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  test("should renders", () => {
    // Arrange
    render(<Text>Example of text</Text>);

    // Act
    const text = screen.getByText("Example of text");

    // Assert
    expect(text).toBeInTheDocument();
  });

  test("should renders as <p>", () => {
    // Arrange
    render(<Text>Example of text</Text>);

    // Act
    const text = screen.getByText((text, element) => {
      return (
        element?.tagName.toLowerCase() === "p" && text === "Example of text"
      );
    });

    // Assert
    expect(text).toBeInTheDocument();
  });
  
});
