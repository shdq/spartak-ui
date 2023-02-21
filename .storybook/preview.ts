import { themes } from "@storybook/theming";
import { darkTheme } from "../components/stitches.config";
export const parameters = {
  darkMode: {
    // Override the default dark theme background
    dark: { ...themes.dark, appContentBg: darkTheme.colors.background.value },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
