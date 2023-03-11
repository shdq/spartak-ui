import { render, screen } from "@testing-library/react";
import { Code } from "./Code";

const isClassSuffixPresent = (element: HTMLElement, value: string) => {
  return [...element.classList].some((className) => className.endsWith(value));
};

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

  describe("with color", () => {
    test("should renders without default color", () => {
      // Arrange
      render(<Code>nums[i]</Code>);

      // Act
      const code = screen.getByText("nums[i]");
      const result = isClassSuffixPresent(code, "color-red");

      // Assert
      expect(result).toBe(false);
    });

    type ColorType = "red" | "green" | "blue";
    type ColorTestData = [color: ColorType, value: string];
    const colorsToTest: ColorTestData[] = [
      ["red", "color-red"],
      ["green", "color-green"],
      ["blue", "color-blue"],
    ];
    test.each(colorsToTest)(
      "should renders with %s color",
      (color, expected) => {
        // Arrange
        render(<Code color={color}>nums[i]</Code>);

        // Act
        const code = screen.getByText("nums[i]");
        const result = isClassSuffixPresent(code, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });
});
