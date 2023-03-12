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
      green: {
        $$color000: "$colors$green000",
        $$color100: "$colors$green100",
        $$color400: "$colors$green400",
        $$color500: "$colors$green500",
        $$color600: "$colors$green600",
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
        color: "$$color400",
        borderColor: "$$color400",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$$color000",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
      },
      text: {
        color: "$$color400",
        borderColor: "transparent",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$$color000",
        },
        "&:disabled": {
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

type ButtonTypeAttributes = "submit" | "reset" | "button" | undefined;

export const Button = ({
  icon,
  endIcon,
  children,
  as,
  type,
  href,
  ...props
}: ButtonProps): JSX.Element => {
  const Wrapper = styled("span", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "$$iconGap",
    paddingLeft: children !== undefined ? "$$wrapperPadding" : 0,
    paddingRight: children !== undefined ? "$$wrapperPadding" : 0,
  });

  /** 1. By default button has type="button"
   *  2. if type provided explicitly, type=("submit" | "reset" | "button")
   *  3. When "as" or both "as" and "href" provided, type attribute isn't set
   **/
  let buttonType: ButtonTypeAttributes = "button";
  if (type !== undefined) buttonType = type;
  if (as !== undefined || (as !== undefined && href !== undefined))
    buttonType = undefined;

  // ignore href prop if "as" element isn't present
  if (as === undefined && href !== undefined) {
    href = undefined;
  }

  return (
    <ButtonComponent type={buttonType} as={as} href={href} {...props}>
      <Wrapper>
        {icon}
        {children}
        {icon === undefined && endIcon}
      </Wrapper>
    </ButtonComponent>
  );
};
