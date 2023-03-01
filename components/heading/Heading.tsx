import { styled } from "../stitches.config";

export const Heading = styled("h2", {
  color: "$foreground",
  fontFamily: "$system",
  fontWeight: "$bold",
  padding: 0,
  margin: 0,

  variants: {
    size: {
      xs: {
        fontSize: "$headingXS",
      },
      sm: {
        fontSize: "$headingSM",
      },
      md: {
        fontSize: "$headingMD",
      },
      lg: {
        fontSize: "$headingLG",
      },
      xl: {
        fontSize: "$headingXL",
      },
      xxl: {
        fontSize: "$headingXXL",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
