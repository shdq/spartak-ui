import { useTheme, Button } from "../index";
import { IconSun, IconMoon } from "@tabler/icons-react";

type Colors = "red" | "blue" | "green";

export interface SwitchProps {
  color?: Colors;
}

export const Switch = ({ color }: SwitchProps): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const isThemeDark = theme === "dark";
  return (
    <Button
      color={color}
      onClick={() => {
        setTheme(isThemeDark ? "light" : "dark");
      }}
      icon={isThemeDark ? <IconSun /> : <IconMoon />}
      variant="text"
      size="md"
    />
  );
};
