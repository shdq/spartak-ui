import { styled } from "../stitches.config";

export const Badge = styled("span", {
  fontFamily: "$system",
  fontWeight: "$medium",
  border: "$borderWidths$1 solid transparent",
  borderRadius: "$round",
  padding: ".2em .4em",
  display: "inline-block",
  verticalAlign: "middle",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "center",
  userSelect: "none",
  textDecoration: "none",

  variants: {
    color: {
      red: {
        $$color000: "$colors$red000",
        $$color100: "$colors$red100",
        $$color400: "$colors$red400",
        $$color500: "$colors$red500",
        $$color600: "$colors$red600",
      },
      blue: {
        $$color000: "$colors$blue000",
        $$color100: "$colors$blue100",
        $$color400: "$colors$blue400",
        $$color500: "$colors$blue500",
        $$color600: "$colors$blue600",
      },
      green: {
        $$color000: "$colors$green000",
        $$color100: "$colors$green100",
        $$color400: "$colors$green400",
        $$color500: "$colors$green500",
        $$color600: "$colors$green600",
      },
    },
    variant: {
      filled: {
        color: "$white",
        backgroundColor: "$$color500",
      },
      tinted: {
        color: "$$color400",
        backgroundColor: "$$color000",
        borderColor: "$$color400",
      },
      outlined: {
        color: "$$color400",
        borderColor: "$$color400",
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
    variant: "filled",
    color: "red",
    size: "sm",
  },
});
