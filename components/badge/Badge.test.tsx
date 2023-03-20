import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

const isClassSuffixPresent = (element: HTMLElement, value: string): boolean => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Badge", () => {
  test("should renders", () => {
    // Arrange
    render(<Badge>Tests</Badge>);

    // Act
    const badge = screen.getByText("Tests");

    // Assert
    expect(badge).toBeInTheDocument();
  });

  test("should renders as <span>", () => {
    // Arrange
    render(<Badge>Tests</Badge>);

    // Act
    const badge = screen.getByText((text, element) => {
      return element?.tagName.toLowerCase() === "span" && text === "Tests";
    });

    // Assert
    expect(badge).toBeInTheDocument();
  });

  test("should renders as link", () => {
    // Arrange
    render(
      <Badge as="a" href="https://example.com" target="_blank">
        Tests
      </Badge>
    );

    // Act
    const badge = screen.getByText((text, element) => {
      return element?.tagName.toLowerCase() === "a" && text === "Tests";
    });

    // Assert
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("href", "https://example.com");
  });

  describe("with color", () => {
    test("should renders with default color", () => {
      // Arrange
      render(<Badge>Tests</Badge>);

      // Act
      const badge = screen.getByText("Tests");
      const result = isClassSuffixPresent(badge, "color-grey");

      // Assert
      expect(result).toBe(true);
    });

    type ColorType = "grey" | "red" | "green" | "blue";
    type ColorTestData = [color: ColorType, value: string];
    const colorsToTest: ColorTestData[] = [
      ["grey", "color-grey"],
      ["red", "color-red"],
      ["green", "color-green"],
      ["blue", "color-blue"],
    ];
    test.each(colorsToTest)(
      "should renders with %s color",
      (color, expected) => {
        // Arrange
        render(<Badge color={color}>Tests</Badge>);

        // Act
        const badge = screen.getByText("Tests");
        const result = isClassSuffixPresent(badge, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });
});
