import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const isClassSuffixPresent = (element: HTMLElement, value: string): boolean => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Select", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];

  test("should render select component with options", () => {
    // Arrange
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");
    const optionElements = screen.getAllByRole("option");

    // Act & Assert
    expect(select).toBeInTheDocument();
    expect(optionElements).toHaveLength(2);
    expect(optionElements[0]).toHaveTextContent("Option 1");
    expect(optionElements[1]).toHaveTextContent("Option 2");
  });

  describe("with variant", () => {
    test("should renders with default variant when variant isn't present", () => {
      // Arrange
      render(<Select options={options} />);

      // Act
      const select = screen.getByRole("combobox");
      const result = isClassSuffixPresent(select, "variant-filled");

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
        render(<Select variant={variant} options={options} />);

        // Act
        const select = screen.getByRole("combobox");
        const result = isClassSuffixPresent(select, expected);

        // Assert
        expect(result).toBe(true);
      }
    );
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<Select options={options} />);

      // Act
      const select = screen.getByRole("combobox");
      const result = isClassSuffixPresent(select, "size-sm");

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
      render(<Select options={options} size={size} />);

      // Act
      const select = screen.getByRole("combobox");
      const result = isClassSuffixPresent(select, expected);

      // Assert
      expect(result).toBe(true);
    });
  });

  test("should render select with label", () => {
    // Arrange
    render(<Select label="Choose option" options={options} />);
    const label = screen.getByLabelText("Choose option");

    // Act & Assert
    expect(label).toBeInTheDocument();
  });

  test("should render select with description", () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        description="This is a description"
        options={options}
      />
    );
    const description = screen.getByText("This is a description");

    // Act & Assert
    expect(description).toBeInTheDocument();
  });

  test("should render select with error state", () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        error="This field is required"
        options={options}
      />
    );
    const error = screen.getByText("This field is required");

    // Act & Assert
    expect(error).toBeInTheDocument();
  });

  test("should render select as required", () => {
    // Arrange
    render(<Select label="Choose option" required options={options} />);
    const asterisk = screen.getByText("*");

    // Act & Assert
    expect(asterisk).toBeInTheDocument();
  });

  test("should not show asterisk if required, but no label provided", () => {
    // Arrange
    render(<Select required options={options} />);
    const asterisk = screen.queryByText("*");

    // Act & Assert
    expect(asterisk).toBeNull();
  });

  test("should handle select value change", async () => {
    // Arrange
    render(<Select label="Choose option" options={options} />);
    const select = screen.getByRole("combobox");

    // Act
    await userEvent.selectOptions(select, "2");

    // Assert
    expect((select as HTMLSelectElement).value).toBe("2");
  });

  test("should render select as disabled", () => {
    // Arrange
    render(<Select label="Choose option" disabled options={options} />);
    const select = screen.getByRole("combobox");

    // Act & Assert
    expect(select).toBeDisabled();
  });

  test("should not focus when disabled", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Select disabled options={options} />);
    const select = screen.getByRole("combobox");

    // Act
    await user.click(select);

    // Assert
    expect(select).not.toHaveFocus();
  });

  test("should have correct focus behavior", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");

    // Act
    await user.click(select);

    // Assert
    expect(select).toHaveFocus();
  });

  test("should render select with icon", () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        icon={<span data-testid="custom-icon">Icon</span>}
        options={options}
      />
    );
    const icon = screen.getByTestId("custom-icon");

    // Act & Assert
    expect(icon).toBeInTheDocument();
  });

  test("should render select with end icon", () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        endIcon={<span data-testid="end-icon">End Icon</span>}
        options={options}
      />
    );
    const endIcon = screen.getByTestId("end-icon");

    // Act & Assert
    expect(endIcon).toBeInTheDocument();
  });

  test("should not render default end icon when custom end icon is provided", () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        endIcon={<span data-testid="end-icon">End Icon</span>}
        options={options}
      />
    );
    const defaultIcon = screen.queryByRole("img"); // the default icon is an SVG (role="img")

    // Act & Assert
    expect(defaultIcon).not.toBeInTheDocument();
  });

  test("should render with error and still allow option selection", async () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        error="This field is required"
        options={options}
      />
    );
    const select = screen.getByRole("combobox");

    // Act
    await userEvent.selectOptions(select, "1");

    // Assert
    expect((select as HTMLSelectElement).value).toBe("1");
  });

  test("should have aria-invalid attribute when in error state", () => {
    // Arrange
    render(
      <Select
        label="Choose option"
        error="Invalid selection"
        options={options}
      />
    );
    const select = screen.getByRole("combobox");

    // Act & Assert
    expect(select).toHaveAttribute("aria-invalid", "true");
  });

  test("should handle different sizes", () => {
    // Arrange
    render(<Select label="Choose option" size="lg" options={options} />);
    const select = screen.getByRole("combobox");

    // Act & Assert
    expect(select).toHaveStyle({
      fontSize: "var(--sizes-lg)",
    });
  });
});
