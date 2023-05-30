import { styled } from "../stitches.config";

export const Separator = styled("hr", {
  backgroundColor: "$grey400",
  boxSizing: "border-box",
  color: "$grey400",
  border: "none",

  variants: {
    orientation: {
      horizontal: {
        height: "1px",
        width: "100%",
        margin: "$paddingMD 0",
      },
      vertical: {
        height: "100%",
        width: "1px",
        margin: "0 $paddingMD",
      },
    },
    flexItem: {
      true: {
        height: "auto",
        alignSelf: "stretch",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
