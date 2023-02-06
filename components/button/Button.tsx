import { styled } from "../stitches.config";

export const Button = styled("button", {
  border: "1px solid transparent",
  borderRadius: "3px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "400",
  padding: "8px 16px",
  transition: "200ms",
  "&:hover": {
    transition: "200ms",
  },
  "&:enabled:active": {
    opacity: 0.8,
    transition: "200ms",
  },
  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    color: {
      red: {
        $$color000: "$colors$red000",
        $$color100: "$colors$red100",
        $$color200: "$colors$red200",
        $$color300: "$colors$red300",
        $$color400: "$colors$red400",
        $$color500: "$colors$red500",
        $$color600: "$colors$red600",
        $$color700: "$colors$red700",
        $$color800: "$colors$red800",
        $$color900: "$colors$red900",
      },
      blue: {
        $$color100: "$colors$blue100",
        $$color000: "$colors$blue000",
        $$color200: "$colors$blue200",
        $$color300: "$colors$blue300",
        $$color400: "$colors$blue400",
        $$color500: "$colors$blue500",
        $$color600: "$colors$blue600",
        $$color700: "$colors$blue700",
        $$color800: "$colors$blue800",
        $$color900: "$colors$blue900",
      },
    },

    variant: {
      filled: {
        color: "$white",
        backgroundColor: "$$color500",
        "&:hover": {
          backgroundColor: "$$color600",
        },
        "&:disabled": {
          backgroundColor: "$$color500",
          opacity: 0.6,
        },
      },
      toned: {
        color: "$$color600",
        backgroundColor: "$$color000",
        "&:hover": {
          backgroundColor: "$$color100",
        },
        "&:disabled": {
          backgroundColor: "$$color000",
          opacity: 0.6,
        },
      },
      outlined: {
        color: "$$color600",
        borderColor: "$$color600",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$$color000",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          opacity: 0.6,
        },
      },
      text: {
        color: "$$color600",
        borderColor: "transparent",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$$color000",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          opacity: 0.6,
        },
      },
    },
  },

  defaultVariants: {
    variant: "filled",
    color: "red",
  },
});
