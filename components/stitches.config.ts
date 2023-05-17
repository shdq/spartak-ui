import { createStitches, createTheme } from "@stitches/react";

const grey = {
  grey000: "#ededed",
  // card background
  grey300: "#f5f5f5",
  // outline border
  grey400: "#c2c2c2",
  grey500: "#999999",
  // text color
  grey700: "#333333",
};

const greyDark = {
  grey000: "#3d3d3d",
  // card background
  grey300: "#313335",
  // outline border
  grey400: "#45484a",
  grey500: "#8f8f8f",
  // text color
  grey700: "#ebebeb",
};

const red = {
  // tinted background
  red000: "#FAE6E6",
  // tinted hover background
  red100: "#F6CCCC",
  // tinted text color
  red400: "#C72424",
  // common primary color between light and dark
  red500: "#D93333",
  // common hovered primary color between light and dark
  red600: "#CF2626",
};

const redDark = {
  // tinted background
  red000: "#490D0D",
  // tinted hover background
  red100: "#570F0F",
  // text color for tinted and hovered text variant
  red400: "#FF3131",
  // common primary color between light and dark
  red500: "#D93333",
  // common hovered primary color between light and dark
  red600: "#CF2626",
};

const blue = {
  // tinted background
  blue000: "#EBF1FF",
  // tinted hover background
  blue100: "#C2D6FF",
  // tinted text color and hovered text variant
  blue400: "#355CEA",
  // common primary color between light and dark
  blue500: "#1F69FF",
  // common hovered primary color between light and dark
  blue600: "#0A5CFF",
};

const blueDark = {
  // tinted background
  blue000: "#0C1F46",
  // tinted hover background
  blue100: "#0F2757",
  // color for tinted and hovered text variant
  blue400: "#4089FF",
  // common primary color between light and dark
  blue500: "#1F69FF",
  // common hovered primary color between light and dark
  blue600: "#0A5CFF",
};

const green = {
  // tinted background
  green000: "#D8FFE0",
  // tinted hover background
  green100: "#ADFFBE",
  // tinted text color and hovered text variant
  green400: "#008F37",
  // common primary color between light and dark
  green500: "#00A33F",
  // common hovered primary color between light and dark
  green600: "#008F37",
};

const greenDark = {
  // tinted background
  green000: "#0D4A1A",
  // tinted hover background
  green100: "#0F5711",
  // color for tinted and hovered text variant
  green400: "#00CC4E",
  // common colors between light and dark
  green500: "#00A33F",
  // common hovered primary color between light and dark
  green600: "#008F37",
};

export const { theme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      ...red,
      ...blue,
      ...green,
      ...grey,
      white: "#ffffff",
      focus: "#53B7DF",
      background: "#ffffff",
      foreground: "#333333",
    },
    space: {
      iconGapXS: "4px",
      paddingXS: "12px",
      iconGapSM: "6px",
      paddingSM: "14px",
      iconGapMD: "8px",
      paddingMD: "16px",
      iconGapLG: "10px",
      paddingLG: "18px",
    },
    fontSizes: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",

      headingXS: "16px",
      headingSM: "18px",
      headingMD: "22px",
      headingLG: "26px",
      headingXL: "30px",
      headingXXL: "40px",
    },
    fonts: {
      system: `system-ui, 
              -apple-system, BlinkMacSystemFont, 
              "Segoe UI", 
              "Roboto", 
              "Oxygen", 
              "Ubuntu", 
              "Cantarell", 
              "Fira Sans", 
              "Droid Sans", 
              "Helvetica Neue", 
              Arial, sans-serif`,
      mono: `ui-monospace, 
              Menlo, Monaco, 
              "Cascadia Mono", "Segoe UI Mono", 
              "Roboto Mono", 
              "Oxygen Mono", 
              "Ubuntu Monospace", 
              "Source Code Pro",
              "Fira Mono", 
              "Droid Sans Mono", 
              "Courier New", monospace`,
    },
    fontWeights: {
      normal: 400,
      bold: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      xs: "26px",
      sm: "32px",
      md: "40px",
      lg: "48px",
    },
    borderWidths: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    borderStyles: {},
    radii: {
      3: "3px",
    },
    shadows: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 4px",
    },
    zIndices: {},
    transitions: {},
  },
});

export const darkTheme = createTheme({
  colors: {
    ...redDark,
    ...blueDark,
    ...greenDark,
    ...greyDark,
    focus: "#70C4E5",
    background: "#232425",
    foreground: "#f5f5f5",
  },
});

export const GlobalStyles = globalCss({
  body: {
    backgroundColor: "$background",
    color: "$foreground",
  },
});

export const checkboxIconSizes = {
  xs: 13,
  sm: 16,
  md: 20,
  lg: 24,
};
