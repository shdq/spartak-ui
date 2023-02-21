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

  test("should have header and footer with semantic tags", () => {
    // Arrange
    render(
      <Card data-testid="card">
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    const card = screen.getByTestId((testId, element) => {
      return element?.tagName.toLowerCase() === "section" && testId === "card";
    });
    const cardHeader = within(card).getByText((text, element) => {
      return element?.tagName.toLowerCase() === "header" && text === "Header";
    });
    const cardBody = within(card).getByText("Body");
    const cardFooter = within(card).getByText((text, element) => {
      return element?.tagName.toLowerCase() === "footer" && text === "Footer";
    });

    // Act & Assert
    expect(card).toBeInTheDocument();
    expect(cardHeader).toBeInTheDocument();
    expect(cardBody).toBeInTheDocument();
    expect(cardFooter).toBeInTheDocument();
  });

  describe("with variant", () => {
    test("should renders with default variant when variant isn't present", () => {
      // Arrange
      render(
        <Card data-testid="card">
          <CardBody>Default variant</CardBody>
        </Card>
      );

      //Act
      const card = screen.getByTestId("card");
      const isClassPresent = [...card.classList].some((className) =>
        className.endsWith("variant-filled")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    test("should renders as filled variant", () => {
      // Arrange
      render(
        <Card data-testid="card" variant="filled">
          <CardBody>Outlined variant</CardBody>
        </Card>
      );

      //Act
      const card = screen.getByTestId("card");
      const isClassPresent = [...card.classList].some((className) =>
        className.endsWith("variant-filled")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    test("should renders as outlined variant", () => {
      // Arrange
      render(
        <Card data-testid="card" variant="outlined">
          <CardBody>Outlined variant</CardBody>
        </Card>
      );

      //Act
      const card = screen.getByTestId("card");
      const isClassPresent = [...card.classList].some((className) =>
        className.endsWith("variant-outlined")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });

    test("should renders as elevated variant", () => {
      // Arrange
      render(
        <Card data-testid="card" variant="elevated">
          <CardBody>Elevated variant</CardBody>
        </Card>
      );

      //Act
      const card = screen.getByTestId("card");
      const isClassPresent = [...card.classList].some((className) =>
        className.endsWith("variant-elevated")
      );

      // Assess
      expect(isClassPresent).toBe(true);
    });
  });
});
