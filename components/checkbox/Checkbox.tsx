import { useId, useState, useEffect, useRef } from "react";
import { styled, checkboxIconSizes } from "../stitches.config";
import { Text } from "../text/index";

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
        "&:indeterminate": {
          backgroundColor: "$red600",
        },
      },
      green: {
        "&:checked": {
          backgroundColor: "$green600",
        },
        "&:indeterminate": {
          backgroundColor: "$green600",
        },
      },
      blue: {
        "&:checked": {
          backgroundColor: "$blue600",
        },
        "&:indeterminate": {
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
    color: "red",
  },
});

const CheckboxWrapper = styled("div", {
  display: "flex",
  gap: "5px",
});

const Label = styled("label", {
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
const CheckedIcon = ({
  checked,
  indeterminate,
  size,
}: TCheckboxIcon): JSX.Element => {
  const key = size as string;
  const px = checkboxIconSizes[key as keyof typeof checkboxIconSizes];

  const CheckContainer = styled("div", {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    pointerEvents: "none",
    color: "$white",
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
        {indeterminate === true && checked === false ? (
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

export type CheckboxProps = React.ComponentProps<typeof CheckboxComponent> & {
  description?: string | JSX.Element;
  error?: string | JSX.Element;
  label?: string | JSX.Element;
  required?: boolean;
  indeterminate?: boolean;
};

export const Checkbox = ({
  checked,
  description,
  error,
  label,
  size = "sm",
  required,
  disabled,
  indeterminate,
  ...props
}: CheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(checked === true);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(
    indeterminate === true
  );
  const id = useId();
  const isInvalid = error !== undefined;
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current !== null && isChecked) {
      checkboxRef.current.indeterminate = false;
      checkboxRef.current.checked = true;
    } else if (checkboxRef.current !== null && !isChecked && !isIndeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (checkboxRef.current !== null && isIndeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [isIndeterminate, isChecked]);

  const changeCheckboxState = (): void => {
    if (isChecked) {
      setIsIndeterminate(false);
    }
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxComponent
        ref={checkboxRef}
        onChange={() => {
          changeCheckboxState();
        }}
        id={id}
        size={size}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
        isInvalid={isInvalid}
        aria-invalid={isInvalid}
        {...props}
      />
      {(isChecked || isIndeterminate) && (
        <CheckedIcon
          aria-hidden="true"
          size={size}
          checked={isChecked}
          indeterminate={indeterminate}
        />
      )}
      {label !== undefined && (
        <Text size={size}>
          <Label disabled={disabled} htmlFor={id}>
            {label}
            {required === true && <Asterisk />}

            {(description !== undefined || isInvalid) && (
              <SupportingText
                as="div"
                variant={isInvalid ? "error" : "description"}
                size={size}
              >
                {isInvalid ? error : description}
              </SupportingText>
            )}
          </Label>
        </Text>
      )}
    </CheckboxWrapper>
  );
};
