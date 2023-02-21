import { styled } from "../stitches.config";

export const Card = styled("section", {
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
  },
  defaultVariants: {
    variant: "filled",
  },
});
export const CardHeader = styled("header", {});
export const CardBody = styled("div", {
  flex: "1 1 auto",
});
export const CardFooter = styled("footer", {});
