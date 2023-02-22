import { styled } from "../stitches.config";

const ButtonComponent = styled("button", {
  all: "unset",
  border: "$borderWidths$1 solid transparent",
  borderRadius: "$3",
  cursor: "pointer",
  textDecoration: "none",
  fontFamily: "$system",
  fontWeight: "$normal",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  boxSizing: "border-box",
  width: "auto",

  whiteSpace: "nowrap",
  textAlign: "left",
  transition: "200ms",
  userSelect: "none",
  "&:hover": {
    transition: "200ms",
  },
  "&:enabled:active": {
    transform: "scale(0.98)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },
  "&:focus-visible": {
    transition: "none",
    // TODO: fix safari outline radius bug
    outline: "1px solid $focus",
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
        },
      },
      outlined: {
        color: "$$color600",
        borderColor: "$$color600",
        backgroundColor: "transparent",
        "&:hover": {
          color: "$$color400",
          backgroundColor: "$$color000",
        },
        "&:disabled": {
          color: "$$color600",
          backgroundColor: "transparent",
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
        },
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
        minWidth: "$sizes$xs",
        height: "$sizes$xs",
        $$iconGap: "$space$iconGapXS",
        $$wrapperPadding: "$space$paddingXS",
      },
      sm: {
        fontSize: "$sm",
        minWidth: "$sizes$sm",
        height: "$sizes$sm",
        $$iconGap: "$space$iconGapSM",
        $$wrapperPadding: "$space$paddingSM",
      },
      md: {
        fontSize: "$md",
        minWidth: "$sizes$md",
        height: "$sizes$md",
        $$iconGap: "$space$iconGapMD",
        $$wrapperPadding: "$space$paddingMD",
      },
      lg: {
        fontSize: "$lg",
        minWidth: "$sizes$lg",
        height: "$sizes$lg",
        $$iconGap: "$space$iconGapLG",
        $$wrapperPadding: "$space$paddingLG",
      },
    },
  },

  defaultVariants: {
    variant: "filled",
    color: "red",
    size: "sm",
  },
});

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonComponent> {
  as?: React.ElementType;
  href?: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button = ({ icon, endIcon, children, ...props }: ButtonProps) => {
  const Wrapper = styled("span", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "$$iconGap",
    paddingLeft: children ? "$$wrapperPadding" : 0,
    paddingRight: children ? "$$wrapperPadding" : 0,
  });

  // it's button when "as" and "href"
  const buttonType =
    (props?.as && props?.href) || props?.type || props?.as ? null : "button";

  // ignore href prop if "as" element isn't present
  if (!props?.as && props?.href) {
    props.href = undefined;
  }

  return (
    <ButtonComponent type={buttonType} href={props.href} {...props}>
      <Wrapper>
        {icon}
        {children}
        {!icon && endIcon}
      </Wrapper>
    </ButtonComponent>
  );
};
