import { render, screen, within } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { IconUser } from "@tabler/icons-react";

const isClassSuffixPresent = (element: HTMLElement, value: string) => {
  return [...element.classList].some((className) => className.endsWith(value));
};

describe("Avatar", () => {
  test("should renders", () => {
    // Arrange
    render(<Avatar data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");

    // Act & Assert
    expect(avatar).toBeInTheDocument();
  });

  test("should have placeholder", () => {
    // Arrange
    render(<Avatar data-testid="avatar">SC</Avatar>);
    const avatar = screen.getByTestId("avatar");

    // Act & Assert
    expect(avatar).toHaveTextContent("SC");
  });

  test("should renders in round shape", () => {
    // Arrange
    render(
      <Avatar round data-testid="avatar">
        SC
      </Avatar>
    );

    //Act
    const avatar = screen.getByTestId("avatar");
    const result = isClassSuffixPresent(avatar, "round-true");

    // Assert
    expect(result).toBe(true);
  });

  describe("with image", () => {
    test("should renders with image", () => {
      // Arrange
      render(<Avatar src="user.png" data-testid="avatar" />);

      //Act
      const avatar = screen.getByTestId("avatar");
      const img = within(avatar).getByRole("img");

      // Assert
      expect(img).toBeInTheDocument();
    });

    test("should have provided alt attribute", () => {
      // Arrange
      render(<Avatar alt="userpic" src="user.png" data-testid="avatar" />);

      //Act
      const avatar = screen.getByTestId("avatar");
      const img = within(avatar).getByRole("img");

      // Assert
      expect(img).toHaveAttribute("alt", "userpic");
    });
  });

  describe("with icon", () => {
    test("should renders with icon", () => {
      // Arrange
      render(
        <Avatar
          icon={<IconUser data-testid="svg-icon" />}
          data-testid="avatar"
        />
      );

      //Act
      const avatar = screen.getByTestId("avatar");
      const icon = within(avatar).getByTestId("svg-icon");

      // Assert
      expect(icon).toBeInTheDocument();
    });

    test("should ignore icon if src is present", () => {
      // Arrange
      render(
        <Avatar
          src="user.png"
          alt="userpic"
          icon={<IconUser data-testid="svg-icon" />}
          data-testid="avatar"
        />
      );

      // Act
      const avatar = screen.getByTestId("avatar");
      const img = within(avatar).getByRole("img");
      // queryBy doesn't throw error, and returns null
      const icon = within(avatar).queryByTestId("svg-icon");

      // Assert
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "userpic");
      expect(icon).toBeNull();
    });
  });

  describe("with status", () => {
    test("should renders with status badge", () => {
      // Arrange
      render(<Avatar status={"online"} data-testid="avatar" />);

      //Act
      const badge = screen.getByTestId("status-badge");

      // Assert
      expect(badge).toBeInTheDocument();
    });
  });

  describe("with size", () => {
    test("should renders with default size when size isn't present", () => {
      // Arrange
      render(<Avatar data-testid="avatar">SC</Avatar>);

      //Act
      const avatar = screen.getByTestId("avatar");
      const result = isClassSuffixPresent(avatar, "size-sm");

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
      render(
        <Avatar size={size} data-testid="avatar">
          SC
        </Avatar>
      );

      //Act
      const avatar = screen.getByTestId("avatar");
      const result = isClassSuffixPresent(avatar, expected);

      // Assert
      expect(result).toBe(true);
    });
  });
});
