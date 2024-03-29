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

  describe("with variant", () => {
    test("should renders with default variant when variant isn't present", () => {
      // Arrange
      render(<Badge>Tests</Badge>);

      // Act
      const badge = screen.getByText("Tests");
      const result = isClassSuffixPresent(badge, "variant-filled");

      // Assert
      expect(result).toBe(true);
    });

    type VarianType = "filled" | "tinted" | "outlined";
    type VariantTestData = [variant: VarianType, value: string];
    const variantsToTest: VariantTestData[] = [
      ["filled", "variant-filled"],
      ["tinted", "variant-tinted"],
      ["outlined", "variant-outlined"],
    ];
    test.each(variantsToTest)(
      "should renders with %s variant",
      (variant, expected) => {
        // Arrange
        render(<Badge variant={variant}>Tests</Badge>);

        // Act
        const badge = screen.getByText("Tests");
        const result = isClassSuffixPresent(badge, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });

  describe("with color", () => {
    test("should renders with default color", () => {
      // Arrange
      render(<Badge>Tests</Badge>);

      // Act
      const badge = screen.getByText("Tests");
      const result = isClassSuffixPresent(badge, "color-red");

      // Assert
      expect(result).toBe(true);
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
        render(<Badge color={color}>Tests</Badge>);

        // Act
        const badge = screen.getByText("Tests");
        const result = isClassSuffixPresent(badge, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });

  describe("with size", () => {
    test("should renders with default size", () => {
      // Arrange
      render(<Badge>Tests</Badge>);

      // Act
      const badge = screen.getByText("Tests");
      const result = isClassSuffixPresent(badge, "size-sm");

      // Assert
      expect(result).toBe(true);
    });

    type SizeType = "xs" | "sm" | "md" | "lg";
    type SizeTestData = [size: SizeType, value: string];
    const sizesToTest: SizeTestData[] = [
      ["xs", "size-xs"],
      ["sm", "size-sm"],
      ["md", "size-md"],
      ["lg", "size-lg"],
    ];
    test.each(sizesToTest)("should renders with %s size", (size, expected) => {
      // Arrange
      render(<Badge size={size}>Tests</Badge>);

      // Act
      const badge = screen.getByText("Tests");
      const result = isClassSuffixPresent(badge, expected);

      // Assert
      expect(result).toBe(true);
    });
  });
});
