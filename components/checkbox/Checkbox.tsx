import { useId, useState } from "react";
import { styled, checkboxIconSizes } from "../stitches.config";
import { Text } from "../index";

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

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  "&:focus-visible": {
    // TODO: fix safari outline radius bug
    outline: "1px solid $focus",
  },

  variants: {
    color: {
      red: {
        "&:checked": {
          backgroundColor: "$red600",
        },
      },
      green: {
        "&:checked": {
          backgroundColor: "$green600",
        },
      },
      blue: {
        "&:checked": {
          backgroundColor: "$blue600",
        },
      },
    },
    size: {
      xs: {
        // fontSize: "$xs",
        height: "calc($sizes$xs / 2)",
        width: "calc($sizes$xs / 2)",
        $$CheckboxIconSize: "calc($sizes$xs / 2)",
      },
      sm: {
        // fontSize: "$sm",
        height: "calc($sizes$sm / 2)",
        width: "calc($sizes$sm / 2)",
        $$CheckboxIconSize: "calc($sizes$sm / 2)",
      },
      md: {
        // fontSize: "$md",
        height: "calc($sizes$md / 2)",
        width: "calc($sizes$md / 2)",
        $$CheckboxIconSize: "calc($sizes$md / 2)",
      },
      lg: {
        // fontSize: "$lg",
        height: "calc($sizes$lg / 2)",
        width: "calc($sizes$lg / 2)",
        $$CheckboxIconSize: "calc($sizes$lg / 2)",
      },
    },
  },
  defaultVariants: {
    color: "red",
  },
});

const CheckboxWrapper = styled("div", {
  position: "relative",
  textAlign: "left",
  color: "$white",
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const Label = styled("label", {
  cursor: "pointer",
  userSelect: "none",
  margin: 0,
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
  },
});

const AsteriskContainer = styled("span", {
  color: "$red500",
  userSelect: "none",
});
const Asterisk = (): JSX.Element => {
  return <AsteriskContainer>&nbsp;*</AsteriskContainer>;
};

type TCheckboxIcon = React.ComponentProps<typeof CheckboxComponent> & {
  indeterminate?: boolean;
};
const CheckedIcon = ({ indeterminate, size }: TCheckboxIcon): JSX.Element => {
  const key = size as string;
  const px = checkboxIconSizes[key as keyof typeof checkboxIconSizes];

  const CheckContainer = styled("div", {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    pointerEvents: "none",
  });

  return (
    <CheckContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {indeterminate === true ? (
          <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
          </>
        ) : (
          <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l5 5l10 -10"></path>
          </>
        )}
      </svg>
    </CheckContainer>
  );
};

export type CheckboxProps = React.ComponentProps<typeof CheckboxComponent> & {
  label?: string;
  required?: boolean;
  indeterminate?: boolean;
};

export const Checkbox = ({
  checked,
  label,
  size = "sm",
  required,
  disabled,
  indeterminate,
  ...props
}: CheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(checked === true);
  const id = useId();

  return (
    <CheckboxWrapper>
      <CheckboxComponent
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        id={id}
        size={size}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
        {...props}
      />
      {(isChecked || indeterminate === true) && (
        <CheckedIcon
          aria-hidden="true"
          size={size}
          checked={isChecked}
          indeterminate={indeterminate}
        />
      )}
      <Text size={size}>
        <Label disabled={disabled} htmlFor={id}>
          {label}
          {label !== undefined && required === true && <Asterisk />}
        </Label>
      </Text>
    </CheckboxWrapper>
  );
};
