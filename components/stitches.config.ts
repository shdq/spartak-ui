import { createStitches, createTheme } from "@stitches/react";

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
  // text color for tinted
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
  // tinted text color
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
  // color for tinted
  blue400: "#5C92FF",
  // common primary color between light and dark
  blue500: "#3377FF",
  // common hovered primary color between light and dark
  blue600: "#1F69FF",
};

export const { styled } = createStitches({
  theme: {
    colors: {
      ...red,
      ...blue,
      white: "#ffffff",
      focus: "#70C4E5",
    },
    space: {},
    fontSizes: {
      default: "14px",
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
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      3: "3px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export const darkTheme = createTheme({
  colors: {
    ...redDark,
    ...blueDark,
  },
});
