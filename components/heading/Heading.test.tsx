import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

const isClassSuffixPresent = (element: HTMLElement, value: string) => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Heading", () => {
  test("should renders", () => {
    // Arrange
    render(<Heading>Example of heading</Heading>);

    // Act
    const heading = screen.getByText("Example of heading");

    // Assert
    expect(heading).toBeInTheDocument();
  });

  test("should renders as <h2>", () => {
    // Arrange
    render(<Heading>Example of heading</Heading>);

    // Act
    const heading = screen.getByText((text, element) => {
      return (
        element?.tagName.toLowerCase() === "h2" && text === "Example of heading"
      );
    });

    // Assert
    expect(heading).toBeInTheDocument();
  });
});
