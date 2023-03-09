import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  test("should renders", () => {
    // Arrange
    render(<Avatar data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");

    // Act & Assert
    expect(avatar).toBeInTheDocument();
  });
});
