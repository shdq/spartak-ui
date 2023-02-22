import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

const isClassSuffixPresent = (element: HTMLElement, value: string) => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Text", () => {
  test("should renders", () => {
    // Arrange
    render(<Text>Example of text</Text>);

    // Act
    const text = screen.getByText("Example of text");

    // Assert
    expect(text).toBeInTheDocument();
  });

  test("should renders as <div>", () => {
    // Arrange
    render(<Text>Example of text</Text>);

    // Act
    const text = screen.getByText((text, element) => {
      return (
        element?.tagName.toLowerCase() === "div" && text === "Example of text"
      );
    });

    // Assert
    expect(text).toBeInTheDocument();
  });

  test("should renders as another element", () => {
    // Arrange
    render(<Text as="strong">Example of strong text</Text>);

    // Act
    const text = screen.getByText((text, element) => {
      return (
        element?.tagName.toLowerCase() === "strong" &&
        text === "Example of strong text"
      );
    });

    // Assert
    expect(text).toBeInTheDocument();
  });

  test("should renders as secondary (dimmed)", () => {
    // Arrange
    render(<Text secondary>Example of text</Text>);

    // Act
    const text = screen.getByText("Example of text");
    const result = isClassSuffixPresent(text, "secondary-true");

    // Assert
    expect(result).toBe(true);
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<Text>Example of text</Text>);

      //Act
      const text = screen.getByText("Example of text");
      const result = isClassSuffixPresent(text, "size-sm");

      // Assert
      expect(result).toBe(true);
    });

    type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
    type SizeTestData = [size: SizeType, value: string];
    const sizesToTest: SizeTestData[] = [
      ["xs", "size-xs"],
      ["sm", "size-sm"],
      ["md", "size-md"],
      ["lg", "size-lg"],
      ["xl", "size-xl"],
    ];
    test.each(sizesToTest)("should renders with %s size", (size, expected) => {
      // Arrange
      render(<Text size={size}>Example of text</Text>);

      //Act
      const text = screen.getByText("Example of text");
      const result = isClassSuffixPresent(text, expected);

      // Assert
      expect(result).toBe(true);
    });
  });
});
