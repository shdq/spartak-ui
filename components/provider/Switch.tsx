import { useTheme } from "../index";
import { Button } from "../index";
import { IconSun, IconMoon } from "@tabler/icons-react";

type Colors = "red" | "blue" | "green";

export type SwitchProps = {
  color?: Colors;
};

export const Switch = ({ color }: SwitchProps) => {
  const { theme, setTheme } = useTheme();
  const isThemeDark = theme === "dark";
  return (
    <Button
      color={color}
      onClick={() => setTheme(isThemeDark ? "light" : "dark")}
      icon={isThemeDark ? <IconSun /> : <IconMoon />}
      variant="text"
      size="md"
    />
  );
};