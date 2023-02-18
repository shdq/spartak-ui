import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from "./TextInput";
import { theme } from "../stitches.config";

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
    expect(firstInput.getAttribute("id")).toEqual(firstLabel.getAttribute("for"));
    expect(secondInput.getAttribute("id")).toEqual(secondLabel.getAttribute("for"));
    expect(firstLabel.getAttribute("for")).not.toEqual(secondLabel.getAttribute("for"));
    expect(firstInput.getAttribute("id")).not.toEqual(secondInput.getAttribute("id"));
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

  test("should have a description", () => {
    // Arrange
    render(<TextInput description="My description" />);

    // Act
    const description = screen.getByText("My description");

    // Assert
    expect(description).toBeInTheDocument();
  });

  describe("with variant", () => {
    test("should renders with default variant when variant isn't present", () => {
      // Arrange
      render(<TextInput />);

      //Act
      const input = screen.getByRole("textbox");
      const isClassPresent = [...input.classList].some((className) =>
        className.endsWith("variant-filled")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    test("should renders with provided variant", () => {
      // Arrange
      render(<TextInput variant="outlined" />);

      //Act
      const input = screen.getByRole("textbox");
      const isClassPresent = [...input.classList].some((className) =>
        className.endsWith("variant-outlined")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<TextInput />);

      //Act
      const input = screen.getByRole("textbox");
      const isClassPresent = [...input.classList].some((className) =>
        className.endsWith("size-sm")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    const themeSizes = theme.sizes;
    const themeSpaces = theme.space;
    Object.keys(themeSizes).map((size) => {
      const label = themeSizes[size as keyof typeof themeSizes].token;
      const paddingLabel =
        themeSpaces[`padding${label.toUpperCase()}` as keyof typeof themeSpaces]
          .token;

      test(`should renders in ${label} size`, () => {
        // Arrange
        render(<TextInput size={label} />);

        //Act
        const input = screen.getByRole("textbox");

        // Assess
        expect(input).toHaveStyle(
          `height: ${themeSizes[label]}, padding: 0 ${themeSpaces[paddingLabel]}`
        );
      });
    });
  });
});
