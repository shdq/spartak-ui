import { render, screen } from "@testing-library/react";
import { Separator } from "./Separator";

const isClassSuffixPresent = (element: HTMLElement, value: string): boolean => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Separator", () => {
  test("should renders", () => {
    // Arrange
    render(<Separator data-testid="separator" />);

    // Act
    const separator = screen.getByTestId("separator");

    // Assert
    expect(separator).toBeInTheDocument();
  });

  test("should renders as <hr>", () => {
    // Arrange
    render(<Separator data-testid="separator" />);

    // Act
    const separator = screen.getByTestId((testId, element) => {
      return element?.tagName.toLowerCase() === "hr" && testId === "separator";
    });

    // Assert
    expect(separator).toBeInTheDocument();
  });

  test("should renders as another element", () => {
    // Arrange
    render(<Separator as="div" data-testid="separator" />);

    // Act
    const separator = screen.getByTestId((testId, element) => {
      return element?.tagName.toLowerCase() === "div" && testId === "separator";
    });

    // Assert
    expect(separator).toBeInTheDocument();
  });

  test("should renders with horizontal orientation by default", () => {
    // Arrange
    render(<Separator data-testid="separator" />);

    // Act
    const separator = screen.getByTestId("separator");
    const result = isClassSuffixPresent(separator, "orientation-horizontal");

    // Assert
    expect(result).toBe(true);
  });

  test("should renders with horizontal orientation when explicitly specified", () => {
    // Arrange
    render(<Separator orientation="horizontal" data-testid="separator" />);

    // Act
    const separator = screen.getByTestId("separator");
    const result = isClassSuffixPresent(separator, "orientation-horizontal");

    // Assert
    expect(result).toBe(true);
  });

  test("should renders with vertical orientation", () => {
    // Arrange
    render(<Separator orientation="vertical" data-testid="separator" />);

    // Act
    const separator = screen.getByTestId("separator");
    const result = isClassSuffixPresent(separator, "orientation-vertical");

    // Assert
    expect(result).toBe(true);
  });

  test("should renders as flex item", () => {
    // Arrange
    render(<Separator flexItem data-testid="separator" />);

    // Act
    const separator = screen.getByTestId("separator");
    const result = isClassSuffixPresent(separator, "flexItem-true");

    // Assert
    expect(result).toBe(true);
  });
});
