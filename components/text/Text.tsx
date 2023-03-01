import { styled } from "../stitches.config";

export const Text = styled("div", {
  color: "$foreground",
  fontFamily: "$system",
  fontWeight: "$normal",
  fontSize: "inherit",
  padding: 0,
  margin: 0,

  "&[href]": {
    textUnderlinePosition: "under",
  },

  variants: {
    secondary: {
      true: {
        color: "$grey500",
      },
    },
    color: {
      red: {
        color: "$red500",
        "&[href]:hover": {
          color: "$red600",
        },
      },
      blue: {
        color: "$blue500",
        "&[href]:hover": {
          color: "$blue600",
        },
      },
      green: {
        color: "$green500",
        "&[href]:hover": {
          color: "$green600",
        },
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
    },
  },
});
