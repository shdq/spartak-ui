import { styled } from "../stitches.config";

const ButtonComponent = styled("button", {
  all: "unset",
  border: "1px solid transparent",
  borderRadius: "$3",
  cursor: "pointer",
  textDecoration: "none",
  fontFamily: "$system",
  fontSize: "$default",
  fontWeight: "$normal",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  minWidth: "32px",
  height: "32px",

  whiteSpace: "nowrap",
  transition: "200ms",
  userSelect: "none",
  "&:hover": {
    transition: "200ms",
  },
  "&:enabled:active": {
    opacity: 0.8,
    transition: "200ms",
  },
  "&:disabled": {
    cursor: "not-allowed",
  },
  "&:focus-visible": {
    transition: "none",
    outline: "3px solid $focus",
  },

  variants: {
    color: {
      red: {
        $$color000: "$colors$red000",
        $$color100: "$colors$red100",
        $$color400: "$colors$red400",
        $$color500: "$colors$red500",
        $$color600: "$colors$red600",
      },
      blue: {
        $$color000: "$colors$blue000",
        $$color100: "$colors$blue100",
        $$color400: "$colors$blue400",
        $$color500: "$colors$blue500",
        $$color600: "$colors$blue600",
      },
    },

    variant: {
      filled: {
        color: "$white",
        backgroundColor: "$$color500",
        "&:hover": {
          backgroundColor: "$$color600",
        },
        "&:disabled": {
          backgroundColor: "$$color500",
          opacity: 0.6,
        },
      },
      tinted: {
        color: "$$color400",
        backgroundColor: "$$color000",
        "&:hover": {
          backgroundColor: "$$color100",
        },
        "&:disabled": {
          backgroundColor: "$$color000",
          opacity: 0.6,
        },
      },
      outlined: {
        color: "$$color600",
        borderColor: "$$color600",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$$color000",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          opacity: 0.6,
        },
      },
      text: {
        color: "$$color600",
        borderColor: "transparent",
        backgroundColor: "transparent",
        "&:hover": {
          color: "$$color400",
          backgroundColor: "$$color000",
        },
        "&:disabled": {
          color: "$$color600",
          backgroundColor: "transparent",
          opacity: 0.6,
        },
      },
    },
  },

  defaultVariants: {
    variant: "filled",
    color: "red",
  },
});

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonComponent> {
  as?: React.ElementType;
  href?: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button = ({
  icon,
  endIcon,
  children,
  ...props
}: ButtonProps) => {
  const Wrapper = styled("span", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingLeft: children ? "16px" : 0,
    paddingRight: children ? "16px" : 0,
  });

  const htmlType = !props?.as && !props?.href && !props?.type ? "button" : null;

  return (
    <ButtonComponent type={htmlType} {...props}>
      <Wrapper>
        {icon}
        {children}
        {!icon && endIcon}
      </Wrapper>
    </ButtonComponent>
  );
};
