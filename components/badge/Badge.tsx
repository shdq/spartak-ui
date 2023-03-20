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
    color: "grey",
    size: "sm",
  },
});
