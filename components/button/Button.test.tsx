import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
import { IconSun } from "@tabler/icons-react";
import { theme } from "../stitches.config";

describe("Button", () => {
  test("should renders", () => {
    // Arrange
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");

    // Act & Assert
    expect(button).toBeInTheDocument();
  });

  test("should be focusable", () => {
    // Arrange
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");

    // Act & Assert
    button.focus();
    expect(button).toHaveFocus();

    button.blur();
    expect(button).not.toHaveFocus();
  });

  test("should call a function on click", async () => {
    // Arrange
    const user = userEvent.setup();
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy}>Click me!</Button>);

    // Act
    const button = screen.getByRole("button");
    await user.click(button);

    // Assert
    expect(onClickSpy).toHaveBeenCalled();
  });

  test("should be disabled", () => {
    // Arrange
    render(<Button disabled>Button</Button>);

    // Act
    const button = screen.getByRole("button");
    button.focus();

    // Assert
    expect(button).toBeDisabled();
    expect(button).not.toHaveFocus();
  });

  describe("with variant", () => {
    test("should renders with default variant when variant isn't present", () => {
      // Arrange
      render(<Button>Default variant</Button>);

      //Act
      const button = screen.getByRole("button");
      const isClassPresent = [...button.classList].some((className) =>
        className.endsWith("variant-filled")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    test("should renders with provided variant", () => {
      // Arrange
      render(<Button variant="outlined">Outlined button</Button>);

      //Act
      const button = screen.getByRole("button");
      const isClassPresent = [...button.classList].some((className) =>
        className.endsWith("variant-outlined")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<Button>Default size</Button>);

      //Act
      const button = screen.getByRole("button");
      const isClassPresent = [...button.classList].some((className) =>
        className.endsWith("size-sm")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    const themeSizes = theme.sizes;
    Object.keys(themeSizes).map((size) => {
      const label = themeSizes[size as keyof typeof themeSizes].token;

      test(`should renders in ${label} size`, () => {
        // Arrange
        render(<Button size={label}>{label} size</Button>);

        //Act
        const button = screen.getByRole("button");

        // Assess
        expect(button).toHaveStyle(
          `height: ${themeSizes[label]}, min-width: ${themeSizes[label]}`
        );
      });
    });
  });

  describe("with color", () => {
    test("should renders with default color when color isn't present", () => {
      // Arrange
      render(<Button>Default color</Button>);

      //Act
      const button = screen.getByRole("button");
      const isClassPresent = [...button.classList].some((className) =>
        className.endsWith("color-red")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    test("should renders with provided color", () => {
      // Arrange
      render(<Button color="blue">Blue button</Button>);

      //Act
      const button = screen.getByRole("button");
      const isClassPresent = [...button.classList].some((className) =>
        className.endsWith("color-blue")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });
  });

  describe("with icon", () => {
    test("should renders with icon", () => {
      // Arrange
      render(<Button icon={<IconSun data-testid="svg-icon" />} />);

      // Act
      const button = screen.getByRole("button");
      const icon = within(button).getByTestId("svg-icon");

      // Assert
      expect(icon).toBeInTheDocument();
    });

    test("should renders with icon before the label", () => {
      // Arrange
      render(
        <Button icon={<IconSun data-testid="test-element" />}>
          <span data-testid="test-element">Label</span>
        </Button>
      );

      // Act
      const button = screen.getByRole("button");
      const wrapper = within(button).getAllByRole((role, element) => {
        return element?.tagName.toLowerCase() === "span" && role === "generic";
      });
      const children = within(wrapper[0]).getAllByTestId("test-element");

      // Assert
      expect(children[0]).toHaveAttribute(
        "xmlns",
        "http://www.w3.org/2000/svg"
      );
      expect(children[1]).toHaveTextContent("Label");
    });

    test("should renders with icon after the label", () => {
      // Arrange
      render(
        <Button endIcon={<IconSun data-testid="test-element" />}>
          <span data-testid="test-element">Label</span>
        </Button>
      );

      // Act
      const button = screen.getByRole("button");
      const wrapper = within(button).getAllByRole((role, element) => {
        return element?.tagName.toLowerCase() === "span" && role === "generic";
      });
      const children = within(wrapper[0]).getAllByTestId("test-element");

      // Assert
      expect(children[0]).toHaveTextContent("Label");
      expect(children[1]).toHaveAttribute(
        "xmlns",
        "http://www.w3.org/2000/svg"
      );
    });

    test("should ignore second icon if both icons are present", () => {
      // Arrange
      render(
        <Button
          icon={<IconSun data-testid="svg-icon" />}
          endIcon={<IconSun data-testid="svg-end-icon" />}
        >
          Label
        </Button>
      );

      // Act
      const button = screen.getByRole("button");
      const icon = within(button).getByTestId("svg-icon");
      // queryBy doesn't throw error, and returns null
      const endIcon = within(button).queryByTestId("svg-end-icon");

      // Assert
      expect(icon).toBeInTheDocument();
      expect(endIcon).toBeNull();
    });
  });
});

describe("as link", () => {
  test("should renders as link when href and as props are present", () => {
    // Arrange
    render(
      <Button as="a" href="https://example.com">
        Button as link
      </Button>
    );

    // Act
    const link = screen.getByRole("link");

    // Assert
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).not.toHaveAttribute("type", "button");
  });

  test("should ingore href when as prop isn't present", () => {
    // Arrange
    render(<Button href="https://example.com">Button as link</Button>);

    // Act
    const button = screen.getByRole("button");

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute("href", "https://example.com");
    expect(button).toHaveAttribute("type", "button");
  });

  test("should renders as link without type='button'", () => {
    // Arrange
    render(
      <Button as="a" data-testid="button-as-link">
        Button as link
      </Button>
    );

    // Act
    // getByRole("link") won't work because without href <a> doesn't have corresponding role
    const link = screen.getByTestId("button-as-link");

    // Assert
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveAttribute("type", "button");
  });

  test("should have explicitly provided type", () => {
    // Arrange
    render(<Button type="submit">Submit</Button>);

    // Act
    const button = screen.getByRole("button");

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });
});
