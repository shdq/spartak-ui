import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Checkbox } from "../index";
import { Text } from "../../index";

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["red", "blue", "green"],
      control: { type: "radio" },
    },
  },
};

const Template: ComponentStory<typeof Checkbox> = ({
  children,
  ...args
}: PropsWithChildren) => <Checkbox {...args}>{children}</Checkbox>;

const Default = Template.bind({});
Default.args = {
  color: "red",
  size: "sm",
};

export const Basic = Template.bind({});
Basic.args = {
  ...Default.args,
};

export const CheckedByDefault = Template.bind({});
CheckedByDefault.args = {
  ...Default.args,
  checked: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "I agree to the terms and conditions",
};

export const WithRequiredLabel = Template.bind({});
WithRequiredLabel.args = {
  ...Default.args,
  label: "I agree to the terms and conditions",
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  label: "I agree to the terms and conditions",
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...Default.args,
  indeterminate: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  label: "I agree to the terms and conditions",
  description: "Description of the checkbox",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  label: "I agree to the terms and conditions",
  description: "Description of the checkbox",
  required: true,
  error: "This field is required",
};

export const LabelWithLink = Template.bind({});
LabelWithLink.args = {
  ...Default.args,
  label: (
    <>
      I agree to{" "}
      <Text color="red" as="a" target="_blank" href="https://example.com">
        the terms and conditions
      </Text>
    </>
  ),
  checked: true,
};

export default CheckboxMeta;
