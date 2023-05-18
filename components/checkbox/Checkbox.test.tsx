import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../index";

const isClassSuffixPresent = (element: HTMLElement, value: string): boolean => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Checkbox", () => {
  test("should renders", () => {
    // Arrange
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).toBeInTheDocument();
  });

  test("should be checked by default", () => {
    // Arrange
    render(<Checkbox checked />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).toBeChecked();
  });

  test("should be checked on click", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("should be disabled", () => {
    // Arrange
    render(<Checkbox disabled />);

    // Act
    const checkbox = screen.getByRole("checkbox");
    checkbox.focus();

    // Assert
    expect(checkbox).toBeDisabled();
    expect(checkbox).not.toHaveFocus();
  });

  test("should be unchecked after the click on disabled", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole("checkbox");

    // Act & Assert
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<Checkbox />);

      // Act
      const checkbox = screen.getByRole("checkbox");
      const result = isClassSuffixPresent(checkbox, "size-sm");

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
      render(<Checkbox size={size} />);

      // Act
      const checkbox = screen.getByRole("checkbox");
      const result = isClassSuffixPresent(checkbox, expected);

      // Assert
      expect(result).toBe(true);
    });
  });

  describe("with color", () => {
    test("should renders with default color when color isn't present", () => {
      // Arrange
      render(<Checkbox label="My label" />);

      // Act
      const checkbox = screen.getByRole("checkbox");
      const result = isClassSuffixPresent(checkbox, "color-red");

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
        render(<Checkbox color={color} label="My label" />);

        // Act
        const checkbox = screen.getByRole("checkbox");
        const result = isClassSuffixPresent(checkbox, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });

  describe("with label", () => {
    test("should have label associated with checkbox", () => {
      // Arrange
      render(<Checkbox label="My label" />);

      // Act
      const checkbox = screen.getByRole("checkbox");
      const label = screen.getByText("My label");

      // Assert
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute("for");
      expect(checkbox).toHaveAttribute("id");
      expect(checkbox.getAttribute("id")).toEqual(label.getAttribute("for"));
    });

    test("should have labels and checkbox with unique for/id", () => {
      // Arrange
      render(
        <>
          <Checkbox label="First label" />
          <Checkbox label="Second label" />
        </>
      );

      // Act
      const firstLabel = screen.getByText("First label");
      const firstCheckbox = screen.getByLabelText("First label");
      const secondLabel = screen.getByText("Second label");
      const secondCheckbox = screen.getByLabelText("Second label");

      // Assert
      expect(firstCheckbox.getAttribute("id")).toEqual(
        firstLabel.getAttribute("for")
      );
      expect(secondCheckbox.getAttribute("id")).toEqual(
        secondLabel.getAttribute("for")
      );
      expect(firstLabel.getAttribute("for")).not.toEqual(
        secondLabel.getAttribute("for")
      );
      expect(firstCheckbox.getAttribute("id")).not.toEqual(
        secondCheckbox.getAttribute("id")
      );
    });

    test("should be checked after click on label", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<Checkbox label="My label" />);

      // Act
      const label = screen.getByText("My label");
      const checkbox = screen.getByLabelText("My label");
      await user.click(label);

      // Assert
      expect(checkbox).toBeChecked();
    });

    test("should have required label", () => {
      // Arrange
      render(<Checkbox label="My label" required />);

      // Act
      const label = screen.getByText("My label");
      const asterisk = screen.getByText("*");

      // Assert
      expect(label).toBeInTheDocument();
      expect(asterisk).toBeInTheDocument();
    });

    test("should have ignore required prop is label is not present", () => {
      // Arrange
      render(<Checkbox required />);

      // Act
      const asterisk = screen.queryByText("*");

      // Assert
      expect(asterisk).toBeNull();
    });
  });
});
