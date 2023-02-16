import { styled } from "../stitches.config";

const InputComponent = styled("input", {
  all: "unset",
  border: "1px solid transparent",
  borderRadius: "$3",
  fontFamily: "$system",
  fontWeight: "$normal",
  color: "$grey700",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },
  "&::placeholder": {
    color: "$grey500",
    opacity: 0.6,
  },
  "&:focus-visible": {
    borderColor: "$grey400",
  },

  variants: {
    variant: {
      filled: {
        backgroundColor: "$grey000",
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
  extends React.ComponentProps<typeof InputComponent> {}

export const TextInput = (props: TextInputProps) => {
  return <InputComponent {...props} />;
};
