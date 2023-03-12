import {
  useState,
  useEffect,
  createContext,
  useContext,
  type PropsWithChildren,
} from "react";
import {
  theme as lightTheme,
  darkTheme,
  GlobalStyles,
} from "../stitches.config";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme, isSystemCall?: boolean) => void;
}

const themeClasses = {
  light: lightTheme.className,
  dark: darkTheme.className,
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [themeMode, setThemeMode] = useState<Theme>("light");
  const html = document.documentElement;

  useEffect(() => {
    const defaultTheme =
      localStorage["spartak-ui-theme"] !== undefined
        ? localStorage.getItem("spartak-ui-theme")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    if (themeMode !== defaultTheme) {
      changeTheme(defaultTheme as Theme, true);
    }

    GlobalStyles();
  }, []);

  const changeTheme = (theme: Theme, isSystemCall = false): void => {
    html.classList.remove(themeClasses[themeMode]);
    html.classList.add(themeClasses[theme]);
    html.style.colorScheme = theme;
    setThemeMode(theme);
    if (!isSystemCall) localStorage.setItem("spartak-ui-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType =>
  useContext(ThemeContext) as ThemeContextType;
