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

  describe("with size", () => {
    test("should renders in default size", () => {
      // Arrange
      render(<Heading>Example of heading</Heading>);

      //Act
      const heading = screen.getByText("Example of heading");
      const result = isClassSuffixPresent(heading, "size-sm");

      // Assert
      expect(result).toBe(true);
    });

    type SizeType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    type SizeTestData = [size: SizeType, value: string];
    const sizesToTest: SizeTestData[] = [
      ["xs", "size-xs"],
      ["sm", "size-sm"],
      ["md", "size-md"],
      ["lg", "size-lg"],
      ["xl", "size-xl"],
      ["xxl", "size-xxl"],
    ];
    test.each(sizesToTest)("should renders with %s size", (size, expected) => {
      // Arrange
      render(<Heading size={size}>Example of heading</Heading>);

      //Act
      const heading = screen.getByText("Example of heading");
      const result = isClassSuffixPresent(heading, expected);

      // Assert
      expect(result).toBe(true);
    });
  });
});
