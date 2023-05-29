import { render, screen } from "@testing-library/react";
import { Separator } from "./Separator";

describe("Separator", () => {
  test("should renders", () => {
    // Arrange
    render(<Separator data-testid="separator" />);

    // Act
    const separator = screen.getByTestId("separator");

    // Assert
    expect(separator).toBeInTheDocument();
  });
});
