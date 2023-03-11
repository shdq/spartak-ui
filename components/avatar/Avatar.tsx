import { styled } from "../stitches.config";

const AvatarComponent = styled("div", {
  position: "relative",
  borderRadius: "$3",
  fontFamily: "$system",
  fontWeight: "$bold",

  variants: {
    round: {
      true: {
        borderRadius: "9999px",
      },
    },
    color: {
      grey: {
        color: "$grey700",
        backgroundColor: "$grey400",
      },
      red: {
        color: "$red400",
        backgroundColor: "$red000",
      },
      green: {
        color: "$green400",
        backgroundColor: "$green000",
      },
      blue: {
        color: "$blue400",
        backgroundColor: "$blue000",
      },
    },
    status: {
      online: {
        $$badgeColor: "$colors$green500",
      },
      busy: {
        $$badgeColor: "$colors$red500",
      },
      offline: {
        $$badgeColor: "$colors$grey500",
      },
      unread: {
        $$badgeColor: "$colors$blue500",
      },
    },
    size: {
      xs: {
        fontSize: "12px",
        width: "24px",
        height: "24px",
        $$borderWidth: "$borderWidths$1",
      },
      sm: {
        fontSize: "16px",
        width: "32px",
        height: "32px",
        $$borderWidth: "$borderWidths$2",
      },
      md: {
        fontSize: "24px",
        width: "48px",
        height: "48px",
        $$borderWidth: "$borderWidths$2",
      },
      lg: {
        fontSize: "32px",
        width: "64px",
        height: "64px",
        $$borderWidth: "$borderWidths$3",
      },
    },
  },

  defaultVariants: {
    size: "sm",
    color: "grey",
  },
});

export type AvatarProps = React.ComponentProps<typeof AvatarComponent> & {
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
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
  overflow: "hidden",
  borderRadius: "inherit",
});

const Badge = styled("div", {
  position: "absolute",
  bottom: "-0.25em",
  right: "-0.25em",
  backgroundColor: "$$badgeColor",
  width: "0.6em",
  height: "0.6em",
  border: "$$borderWidth solid $colors$background",
  borderRadius: "9999px",
  variants: {
    round: {
      true: {
        bottom: "-$$borderWidth",
        right: "-$$borderWidth",
      },
    },
  },
});

export const Avatar = ({
  src,
  alt,
  icon,
  status,
  round,
  size = "sm",
  children,
  ...props
}: AvatarProps) => {
  const label = size as keyof typeof sizes;
  return (
    <AvatarComponent status={status} round={round} size={size} {...props}>
      <Wrapper>
        {src ? (
          <img
            alt={alt}
            draggable={false}
            width={sizes[label]}
            height={sizes[label]}
            src={src}
          />
        ) : (
          icon || children
        )}
        {status && (
          <Badge
            data-testid="status-badge"
            title={status.toString()}
            round={round}
          />
        )}
      </Wrapper>
    </AvatarComponent>
  );
};
