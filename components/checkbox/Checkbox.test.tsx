import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../index";

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
    render(<Checkbox defaultChecked />);
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

    test("should be in focus after click on label", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<Checkbox label="My label" />);

      // Act
      const label = screen.getByText("My label");
      const input = screen.getByLabelText("My label");
      await user.click(label);

      // Assert
      expect(input).toHaveFocus();
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
