import { styled } from "../stitches.config";

const AvatarComponent = styled("div", {
  borderRadius: "$3",
  fontFamily: "$system",
  fontWeight: "$bold",
  overflow: "hidden",

  color: "$foreground",
  backgroundColor: "$grey400",

  variants: {
    round: {
      true: {
        borderRadius: "9999px",
      },
    },
    size: {
      xs: {
        fontSize: "12px",
        width: "24px",
        height: "24px",
      },
      sm: {
        fontSize: "16px",
        width: "32px",
        height: "32px",
      },
      md: {
        fontSize: "24px",
        width: "48px",
        height: "48px",
      },
      lg: {
        fontSize: "32px",
        width: "64px",
        height: "64px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export type AvatarProps = React.ComponentProps<typeof AvatarComponent> & {
  src?: string;
  alt?: string;
};

const sizes = {
  xs: "24px",
  sm: "32px",
  md: "48px",
  lg: "64px",
};

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
});

export const Avatar = ({
  src,
  alt,
  icon,
  size = "sm",
  children,
  ...props
}: AvatarProps) => {
  if (src) {
    const label = size as keyof typeof sizes;
    return (
      <AvatarComponent size={size} {...props}>
        <Wrapper>
          <img
            alt={alt}
            draggable={false}
            width={sizes[label]}
            height={sizes[label]}
            src={src}
          ></img>
        </Wrapper>
      </AvatarComponent>
    );
  }

  return (
    <AvatarComponent size={size} {...props}>
      <Wrapper>{children}</Wrapper>
    </AvatarComponent>
  );
};
