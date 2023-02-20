import { styled } from "../stitches.config";

export const Card = styled("div", {
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
        backgroundColor: "$grey400",
      },
    },
    size: {
      xs: {
        minWidth: "240px",
      },
      sm: {
        minWidth: "280px",
      },
      md: {
        minWidth: "320px",
      },
      lg: {
        minWidth: "360px",
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
