import { render, screen, within } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

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
});
