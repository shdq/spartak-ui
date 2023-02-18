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
        borderColor: "$grey500",
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
  },
  defaultVariants: {
    variant: "filled",
    size: "sm",
  },
});

const InputWrapper = styled("div", {
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

export interface TextInputProps
  extends React.ComponentProps<typeof InputComponent> {
  description?: string;
  error?: string;
  label?: string;
  required?: boolean;
}

export const TextInput = ({
  children,
  description,
  error,
  label,
  required,
  size,
  ...props
}: TextInputProps) => {
  const id = useId();
  const isInvalid = !!error; // if error change border color
  return (
    <InputWrapper size={size}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <Asterisk />}
        </Label>
      )}
      <InputComponent isInvalid={isInvalid} id={id} size={size} {...props} />
      {(description || error) && (
        <SupportingText variant={error ? "error" : "description"} size={size}>
          {error ? error : description}
        </SupportingText>
      )}
    </InputWrapper>
  );
};
