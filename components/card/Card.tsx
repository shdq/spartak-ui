import { styled } from "../stitches.config";

export const Card = styled("div", {
  fontFamily: "$system",
  fontWeight: "$normal",
  border: "$borderWidths$1 solid transparent",
  boxSizing: "border-box",
  position: "relative",
  borderRadius: "$3",
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  padding: "16px",

  variants: {
    variant: {
      filled: {
        backgroundColor: "$grey300",
      },
      outlined: {
        backgroundColor: "transparent",
        borderColor: "$grey400",
      },
      elevated: {
        backgroundColor: "$grey300",
        boxShadow: "$shadows$boxShadow",
      },
    },
    size: {
      xs: {
        maxWidth: "240px",
      },
      sm: {
        maxWidth: "280px",
      },
      md: {
        maxWidth: "320px",
      },
      lg: {
        maxWidth: "360px",
      },
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "sm",
  },
});
export const CardHeader = styled("div", {});
export const CardBody = styled("div", {
  flex: "1 1 auto",
});
export const CardFooter = styled("div", {});
