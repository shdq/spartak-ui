import { styled } from "../stitches.config";

export const Separator = styled("div", {
  variants: {
    orientation: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
