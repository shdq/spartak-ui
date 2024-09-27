import { styled } from "../stitches.config";

export const SupportingText = styled("span", {
  variants: {
    variant: {
      error: {
        color: "$red500",
      },
      description: {
        color: "$grey500",
      },
    },
    size: {
      xs: {
        fontSize: "$xxs",
      },
      sm: {
        fontSize: "$xs",
      },
      md: {
        fontSize: "$sm",
      },
      lg: {
        fontSize: "$md",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
