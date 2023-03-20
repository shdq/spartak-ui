import { styled } from "../stitches.config";

export const Badge = styled("span", {
  fontFamily: "$system",
  border: "$borderWidths$1 solid transparent",
  borderRadius: "2em",
  fontSize: "0.8em",
  padding: ".2em .5em",
  userSelect: "none",
  display: "inline-flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  textDecoration: "none",

  variants: {
    color: {
      grey: {
        color: "$grey700",
        backgroundColor: "$grey400",
        borderColor: "$$grey700",
      },
      red: {
        color: "$red400",
        backgroundColor: "$red000",
        borderColor: "$$red400",
      },
      green: {
        color: "$green400",
        backgroundColor: "$green000",
        borderColor: "$$green400",
      },
      blue: {
        color: "$blue400",
        backgroundColor: "$blue000",
        borderColor: "$$blue400",
      },
    },
  },
  defaultVariants: {
    color: "grey",
  },
});
