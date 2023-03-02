import { styled } from "../stitches.config";

const CheckboxComponent = styled("input", {
  all: "unset",
  boxSizing: "border-box",
  padding: 0,
  border: "$borderWidths$1 solid transparent",
  borderRadius: "$3",

  backgroundColor: "$grey000",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:checked": {
    fontWeight: "$bold",
    color: "$foreground",
  },

  "&:checked:after": {
    content: "✓",
  },

  "&:focus-visible": {
    // TODO: fix safari outline radius bug
    outline: "1px solid $focus",
  },

  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        height: "calc($sizes$xs / 2)",
        width: "calc($sizes$xs / 2)",
      },
      sm: {
        fontSize: "$sm",
        height: "calc($sizes$sm / 2)",
        width: "calc($sizes$sm / 2)",
      },
      md: {
        fontSize: "$md",
        height: "calc($sizes$md / 2)",
        width: "calc($sizes$md / 2)",
      },
      lg: {
        fontSize: "$lg",
        height: "calc($sizes$lg / 2)",
        width: "calc($sizes$lg / 2)",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxComponent> {}

export const Checkbox = (props: CheckboxProps) => {
  return <CheckboxComponent type="checkbox" {...props} />;
};
