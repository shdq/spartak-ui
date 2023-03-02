import { useId } from "react";
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

  cursor: "pointer",

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

const CheckboxWrapper = styled("div", {
  fontFamily: "$system",
  fontWeight: "$normal",
  textAlign: "left",
  color: "$grey700",
  display: "flex",
  alignItems: "center",
  gap: "5px",

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
  cursor: "pointer",
  userSelect: "none",
  margin: 0,
});

const AsteriskContainer = styled("span", {
  color: "$red500",
  userSelect: "none",
});
const Asterisk = () => {
  return <AsteriskContainer>&nbsp;*</AsteriskContainer>;
};

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxComponent> {
  label?: string;
  required?: boolean;
}

export const Checkbox = ({
  label,
  size,
  required,
  ...props
}: CheckboxProps) => {
  const id = useId();
  return (
    <CheckboxWrapper size={size}>
      <CheckboxComponent id={id} size={size} type="checkbox" {...props} />
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <Asterisk />}
        </Label>
      )}
    </CheckboxWrapper>
  );
};
