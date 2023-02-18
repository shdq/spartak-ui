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
  },
  defaultVariants: {
    variant: "filled",
    size: "sm",
  },
});

export interface TextInputProps
  extends React.ComponentProps<typeof InputComponent> {
  label?: string;
  description?: string;
  required?: boolean;
}

const Wrapper = styled("div", {
  fontFamily: "$system",
  fontWeight: "$normal",
  textAlign: "left",
  color: "$grey500",
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
const Description = styled("span", {
  variants: {
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

export const TextInput = ({
  children,
  description,
  label,
  required,
  size,
  ...props
}: TextInputProps) => {
  const id = useId();
  return (
    <Wrapper size={size}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <Asterisk />}
        </Label>
      )}
      <InputComponent id={id} size={size} {...props} />
      {description && <Description size={size}>{description}</Description>}
    </Wrapper>
  );
};
