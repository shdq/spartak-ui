import { render, screen, within } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { theme } from "../stitches.config";

describe("Card", () => {
  test("should renders", () => {
    // Arrange
    render(
      <Card data-testid="card">
        <CardBody>Basic card</CardBody>
      </Card>
    );
    const card = screen.getByTestId("card");
    const cardBody = within(card).getByText("Basic card");

    // Act & Assert
    expect(card).toBeInTheDocument();
    expect(cardBody).toBeInTheDocument();
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(
        <Card data-testid="card">
          <CardBody>Default size</CardBody>
        </Card>
      );

      //Act
      const card = screen.getByTestId("card");
      const isClassPresent = [...card.classList].some((className) =>
        className.endsWith("size-sm")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });
  });
});
