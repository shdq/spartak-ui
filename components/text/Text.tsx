import { styled } from "../stitches.config";

export const Text = styled("p", {
  color: "$foreground",
  fontFamily: "$system",
  fontWeight: "$normal",
  padding: 0,
  margin: 0,

  variants: {
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
  defaultVariants: {
    size: "sm",
  },
});
