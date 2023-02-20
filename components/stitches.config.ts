import { createStitches, createTheme } from "@stitches/react";

const grey = {
  grey000: "#ededed",
  // card background
  grey300: "#f5f5f5",
  // card outline border
  grey400: "#eaeaea",
  grey500: "#999999",
  // text color
  grey700: "#333333",
};

const greyDark = {
  grey000: "#3d3d3d",
  // card background
  grey300: "#313335",
  // card outline border
  grey400: "#333536",
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
  red500: "#DE4D4D",
  // common hovered primary color between light and dark
  red600: "#D93333",
};

const redDark = {
  // tinted background
  red000: "#490D0D",
  // tinted hover background
  red100: "#570F0F",
  // text color for tinted and hovered text variant
  red400: "#E36464",
  // common primary color between light and dark
  red500: "#DE4D4D",
  // common hovered primary color between light and dark
  red600: "#D93333",
};

const blue = {
  // tinted background
  blue000: "#EBF1FF",
  // tinted hover background
  blue100: "#C2D6FF",
  // tinted text color and hovered text variant
  blue400: "#0A5CFF",
  // common colors between light and dark
  blue500: "#3377FF",
  blue600: "#1F69FF",
};

const blueDark = {
  // tinted background
  blue000: "#112B5F",
  // tinted hover background
  blue100: "#14326D",
  // color for tinted and hovered text variant
  blue400: "#5C92FF",
  // common primary color between light and dark
  blue500: "#3377FF",
  // common hovered primary color between light and dark
  blue600: "#1F69FF",
};

export const { theme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      ...red,
      ...blue,
      ...grey,
      white: "#ffffff",
      focus: "#53B7DF",
      background: "#ffffff",
      foreground: "#222222",
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
    },
    fonts: {
      system:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    fontWeights: {
      normal: 400,
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
    },
    borderStyles: {},
    radii: {
      3: "3px",
    },
    shadows: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 4px"
    },
    zIndices: {},
    transitions: {},
  },
});

export const darkTheme = createTheme({
  colors: {
    ...redDark,
    ...blueDark,
    ...greyDark,
    focus: "#70C4E5",
    background: "#232425",
    foreground: "#ffffff",
  },
});

export const GlobalStyles = globalCss({
  body: {
    backgroundColor: "$background",
    color: "$foreground",
  },
});
