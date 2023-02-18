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

const Wrapper = styled("div", {});
const Label = styled("label", {});
const Description = styled("span", {});
const AsteriskContainer = styled("span", {});
const Asterisk = () => {
  return <AsteriskContainer>*</AsteriskContainer>;
};

export const TextInput = ({
  children,
  description,
  label,
  required,
  ...props
}: TextInputProps) => {
  const id = useId();
  return (
    <Wrapper>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <Asterisk />}
        </Label>
      )}
      <InputComponent id={id} {...props} />
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};
