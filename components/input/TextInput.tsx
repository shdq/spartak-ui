import { useId } from "react";
import { styled } from "../stitches.config";

const InputComponent = styled("input", {
  all: "unset",
  cursor: "text",
  border: "$borderWidths$1 solid transparent",
  borderRadius: "$3",
  fontFamily: "$system",
  fontWeight: "$normal",
  textAlign: "left",
  color: "$grey700",
  width: "100%",
  boxSizing: "border-box",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },
  "&::placeholder": {
    color: "$grey500",
    opacity: 0.6,
  },
  "&:focus-visible": {
    borderColor: "$focus",
  },

  variants: {
    variant: {
      filled: {
        backgroundColor: "$grey000",
      },
      outlined: {
        backgroundColor: "transparent",
        borderColor: "$grey400",
        "&:focus-visible": {
          borderColor: "$focus",
        },
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
        height: "$sizes$xs",
        padding: "0 $paddingXS",
      },
      sm: {
        fontSize: "$sm",
        height: "$sizes$sm",
        padding: "0 $paddingSM",
      },
      md: {
        fontSize: "$md",
        height: "$sizes$md",
        padding: "0 $paddingMD",
      },
      lg: {
        fontSize: "$lg",
        height: "$sizes$lg",
        padding: "0 $paddingLG",
      },
    },
    isInvalid: {
      true: {
        borderColor: "$red500 !important",
        "&:focus-visible": {
          borderColor: "$focus !important",
        },
      },
    },
    withIcon: {
      true: {},
    },
  },
  compoundVariants: [
    {
      withIcon: true,
      size: "xs",
      css: {
        paddingLeft: "$sizes$xs",
      },
    },
    {
      withIcon: true,
      size: "sm",
      css: {
        paddingLeft: "$sizes$sm",
      },
    },
    {
      withIcon: true,
      size: "md",
      css: {
        paddingLeft: "$sizes$md",
      },
    },
    {
      withIcon: true,
      size: "lg",
      css: {
        paddingLeft: "$sizes$lg",
      },
    },
  ],
  defaultVariants: {
    variant: "filled",
    size: "sm",
  },
});

const InputWrapper = styled("div", {
  position: "relative",
  fontFamily: "$system",
  fontWeight: "$normal",
  textAlign: "left",
  color: "$grey700",
  variants: {
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
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
const Label = styled("label", {
  display: "block",
  marginBottom: "3px",
  userSelect: "none",
});
const SupportingText = styled("span", {
  variants: {
    variant: {
      error: {
        color: "$red500",
      },
      description: {
        color: "$grey500",
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
    size: "sm",
  },
});
const AsteriskContainer = styled("span", {
  color: "$red500",
  userSelect: "none",
});
const Asterisk = () => {
  return <AsteriskContainer>&nbsp;*</AsteriskContainer>;
};

const IconWrapper = styled("div", {
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
  color: "$grey500",
  pointerEvents: "none",

  variants: {
    position: {
      start: {
        left: 0,
      },
      end: {
        right: 0,
      },
    },
    size: {
      xs: {
        height: "$sizes$xs",
        width: "$sizes$xs",
      },
      sm: {
        height: "$sizes$sm",
        width: "$sizes$sm",
      },
      md: {
        height: "$sizes$md",
        width: "$sizes$md",
      },
      lg: {
        height: "$sizes$lg",
        width: "$sizes$lg",
      },
    },
  },
  defaultVariants: {
    position: "start",
    size: "sm",
  },
});

export interface TextInputProps
  extends React.ComponentProps<typeof InputComponent> {
  description?: string;
  error?: string;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
  required?: boolean;
}

export const TextInput = ({
  children,
  description,
  error,
  endIcon,
  icon,
  label,
  required,
  size,
  ...props
}: TextInputProps) => {
  const id = useId();
  const isInvalid = !!error; // if error change border color
  const withIcon = !!icon; // change left padding to icon container size
  return (
    <InputWrapper size={size}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <Asterisk />}
        </Label>
      )}
      {icon && (
        <IconWrapper position="start" size={size}>
          {icon}
        </IconWrapper>
      )}
      <InputComponent
        withIcon={withIcon}
        isInvalid={isInvalid}
        aria-invalid={isInvalid}
        id={id}
        size={size}
        {...props}
      />
      {endIcon && (
        <IconWrapper position="end" size={size}>
          {endIcon}
        </IconWrapper>
      )}
      {(description || error) && (
        <SupportingText variant={error ? "error" : "description"} size={size}>
          {error || description}
        </SupportingText>
      )}
    </InputWrapper>
  );
};
