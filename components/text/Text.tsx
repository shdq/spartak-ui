import { styled } from "../stitches.config";

const TextComponent = styled("div", {
  color: "$foreground",
  fontFamily: "$system",
  fontWeight: "$normal",
  fontSize: "inherit",
  padding: 0,
  margin: 0,

  "&[href]": {
    textUnderlinePosition: "under",
  },

  variants: {
    secondary: {
      true: {
        color: "$grey500",
      },
    },
    color: {
      red: {
        color: "$red500",
        "&[href]:hover": {
          color: "$red600",
        },
      },
      blue: {
        color: "$blue500",
        "&[href]:hover": {
          color: "$blue600",
        },
      },
      green: {
        color: "$green500",
        "&[href]:hover": {
          color: "$green600",
        },
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
    },
  },
});

export interface TextProps extends React.ComponentProps<typeof TextComponent> {
  as?: React.ElementType;
  href?: string;
}

export const Text = ({
  children,
  as,
  href,
  ...props
}: TextProps): JSX.Element => {
  // ignore href prop if "as" element isn't present or not equal to "a" element
  if (as !== "a" && href !== undefined) {
    href = undefined;
  }

  return (
    <TextComponent
      css={as === "strong" || as === "b" ? { fontWeight: "$bold" } : undefined}
      as={as}
      href={href}
      {...props}
    >
      {children}
    </TextComponent>
  );
};
