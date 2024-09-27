import { styled } from "../stitches.config";

export const Label = styled("label", {
  display: "inline-block",
  marginBottom: "3px",
  userSelect: "none",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
  },
});
