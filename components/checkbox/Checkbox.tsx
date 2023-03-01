import { styled } from "../stitches.config";

const CheckboxComponent = styled("input", {});

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxComponent> {}

export const Checkbox = (props: CheckboxProps) => (
  <CheckboxComponent type="checkbox" />
);
