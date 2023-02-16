import { styled } from "../stitches.config";

const InputComponent = styled("input", {});

export interface TextInputProps
  extends React.ComponentProps<typeof InputComponent> {}

export const TextInput = (props: TextInputProps) => {
  return (
      <InputComponent {...props} />
  );
};
