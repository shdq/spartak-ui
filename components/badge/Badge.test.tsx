import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  test("should renders", () => {
    // Arrange
    render(<Badge>Tests</Badge>);

    // Act
    const badge = screen.getByText("Tests");

    // Assert
    expect(badge).toBeInTheDocument();
  });
});
