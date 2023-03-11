import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from "./TextInput";
import { IconSearch, IconMicrophone } from "@tabler/icons-react";

const isClassSuffixPresent = (element: HTMLElement, value: string): boolean => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("TextInput", () => {
  test("should renders", () => {
    // Arrange
    render(<TextInput />);
    const input = screen.getByRole("textbox");

    // Act & Assert
    expect(input).toBeInTheDocument();
  });

  test("should have placeholder", () => {
    // Arrange
    render(<TextInput placeholder="My placeholder" />);
    const input = screen.getByRole("textbox");

    // Act & Assert
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "My placeholder");
  });

  test("should be focusable", () => {
    // Arrange
    render(<TextInput />);
    const input = screen.getByRole("textbox");

    // Act & Assert
    input.focus();
    expect(input).toHaveFocus();

    input.blur();
    expect(input).not.toHaveFocus();
  });

  test("should be disabled", () => {
    // Arrange
    render(<TextInput disabled />);

    // Act
    const input = screen.getByRole("textbox");
    input.focus();

    // Assert
    expect(input).toBeDisabled();
    expect(input).not.toHaveFocus();
  });

  test("should have a description", () => {
    // Arrange
    render(<TextInput description="My description" />);

    // Act
    const description = screen.getByText("My description");

    // Assert
    expect(description).toBeInTheDocument();
  });

  describe("with label", () => {
    test("should have label associated with input", () => {
      // Arrange
      render(<TextInput label="My label" />);

      // Act
      const input = screen.getByRole("textbox");
      const label = screen.getByText("My label");

      // Assert
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute("for");
      expect(input).toHaveAttribute("id");
      expect(input.getAttribute("id")).toEqual(label.getAttribute("for"));
    });

    test("should have required label", () => {
      // Arrange
      render(<TextInput label="My label" required />);

      // Act
      const label = screen.getByText("My label");
      const asterisk = screen.getByText("*");

      // Assert
      expect(label).toBeInTheDocument();
      expect(asterisk).toBeInTheDocument();
    });

    test("should have ignore required prop is label is not present", () => {
      // Arrange
      render(<TextInput required />);

      // Act
      const asterisk = screen.queryByText("*");

      // Assert
      expect(asterisk).toBeNull();
    });

    test("should have labels and inputs with unique for/id", () => {
      // Arrange
      render(
        <>
          <TextInput label="First label" />
          <TextInput label="Second label" />
        </>
      );

      // Act
      const firstLabel = screen.getByText("First label");
      const firstInput = screen.getByLabelText("First label");
      const secondLabel = screen.getByText("Second label");
      const secondInput = screen.getByLabelText("Second label");

      // Assert
      expect(firstInput.getAttribute("id")).toEqual(
        firstLabel.getAttribute("for")
      );
      expect(secondInput.getAttribute("id")).toEqual(
        secondLabel.getAttribute("for")
      );
      expect(firstLabel.getAttribute("for")).not.toEqual(
        secondLabel.getAttribute("for")
      );
      expect(firstInput.getAttribute("id")).not.toEqual(
        secondInput.getAttribute("id")
      );
    });

    test("should be in focus after click on label", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<TextInput label="My label" />);

      // Act
      const label = screen.getByText("My label");
      const input = screen.getByLabelText("My label");
      await user.click(label);

      // Assert
      expect(input).toHaveFocus();
    });
  });

  describe("with error", () => {
    test("should be invalid with error message", () => {
      // Arrange
      render(<TextInput error="Invalid value" />);

      // Act
      const error = screen.getByText("Invalid value");
      const input = screen.getByRole("textbox");
      const result = isClassSuffixPresent(input, "isInvalid-true");

      // Assert
      expect(error).toBeInTheDocument();
      expect(result).toBe(true);
    });

    test("should show error not description", () => {
      // Arrange
      render(<TextInput description="My description" error="Invalid value" />);

      // Act
      const description = screen.queryByText("My description");
      const error = screen.getByText("Invalid value");

      // Assert
      expect(error).toBeInTheDocument();
      expect(description).toBeNull();
    });
  });

  describe("with variant", () => {
    test("should renders with default variant when variant isn't present", () => {
      // Arrange
      render(<TextInput />);

      // Act
      const input = screen.getByRole("textbox");
      const result = isClassSuffixPresent(input, "variant-filled");

      // Assert
      expect(result).toBe(true);
    });

    type VarianType = "filled" | "outlined";
    type VariantTestData = [variant: VarianType, value: string];
    const variantsToTest: VariantTestData[] = [
      ["filled", "variant-filled"],
      ["outlined", "variant-outlined"],
    ];
    test.each(variantsToTest)(
      "should renders with %s variant",
      (variant, expected) => {
        // Arrange
        render(<TextInput variant={variant} />);

        // Act
        const input = screen.getByRole("textbox");
        const result = isClassSuffixPresent(input, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<TextInput />);

      // Act
      const input = screen.getByRole("textbox");
      const result = isClassSuffixPresent(input, "size-sm");

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
      render(<TextInput size={size} />);

      // Act
      const input = screen.getByRole("textbox");
      const result = isClassSuffixPresent(input, expected);

      // Assert
      expect(result).toBe(true);
    });
  });

  describe("with icon", () => {
    test("should renders with icon", () => {
      // Arrange
      render(<TextInput icon={<IconSearch data-testid="svg-icon" />} />);

      // Act
      const icon = screen.getByTestId("svg-icon");

      // Assert
      expect(icon).toBeInTheDocument();
    });

    test("should renders with icon in the end", () => {
      // Arrange
      render(
        <TextInput endIcon={<IconMicrophone data-testid="svg-mic-icon" />} />
      );

      // Act
      const endIcon = screen.getByTestId("svg-mic-icon");

      // Assert
      expect(endIcon).toBeInTheDocument();
    });

    test("should renders with icons on both sides", () => {
      // Arrange
      render(<TextInput icon={<IconSearch data-testid="svg-search-icon" />} />);
      render(
        <TextInput endIcon={<IconMicrophone data-testid="svg-mic-icon" />} />
      );

      // Act
      const icon = screen.getByTestId("svg-search-icon");
      const endIcon = screen.getByTestId("svg-mic-icon");

      // Assert
      expect(icon).toBeInTheDocument();
      expect(endIcon).toBeInTheDocument();
    });
  });
});
