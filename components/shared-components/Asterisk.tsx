import { styled } from "../stitches.config";

const AsteriskContainer = styled("span", {
  color: "$red500",
  userSelect: "none",
});

export const Asterisk = (): JSX.Element => {
  return <AsteriskContainer>&nbsp;*</AsteriskContainer>;
};
