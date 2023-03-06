import { styled } from "../stitches.config";

export const Code = styled("code", {
  fontFamily: "$mono",
  fontSize: "0.9em",
  borderRadius: "$3",
  color: "$grey700",
  backgroundColor: "$grey000",
  padding: ".2em .4em",

  variants: {
    color: {
      red: {
        backgroundColor: "$red000",
      },
      green: {
        backgroundColor: "$green000",
      },
      blue: {
        backgroundColor: "$blue000",
      },
    },
  },
});
