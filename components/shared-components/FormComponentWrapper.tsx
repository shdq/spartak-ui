import { styled } from "../stitches.config";

export const FormComponentWrapper = styled("div", {
  position: "relative",
  fontFamily: "$system",
  fontWeight: "$normal",
  textAlign: "left",
  color: "$grey700",
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
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
