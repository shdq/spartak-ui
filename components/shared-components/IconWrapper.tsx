import { styled } from "../stitches.config";

export const IconWrapper = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$grey500",
  pointerEvents: "none",

  variants: {
    position: {
      start: {
        left: 0,
      },
      end: {
        right: 0,
      },
    },
    size: {
      xs: {
        height: "$sizes$xs",
        width: "$sizes$xs",
      },
      sm: {
        height: "$sizes$sm",
        width: "$sizes$sm",
      },
      md: {
        height: "$sizes$md",
        width: "$sizes$md",
      },
      lg: {
        height: "$sizes$lg",
        width: "$sizes$lg",
      },
    },
  },
  defaultVariants: {
    position: "start",
    size: "sm",
  },
});
