import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { darkTheme } from "../../stitches.config";
import { TextInput } from "../TextInput";

export default {
  title: "Components/Input",
  component: TextInput,
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
    type: {
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

const Default = Template.bind({});
Default.args = {
  variant: "filled",
  size: "sm",
  disabled: false,
  placeholder: "Text input",
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  type: "text",
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  variant: "outlined",
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
  ...Default.args,
  disabled: true,
  value: "Disabled with value",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "Login",
};

export const WithRequiredLabel = Template.bind({});
WithRequiredLabel.args = {
  ...Default.args,
  label: "Login",
  required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: "Enter username or email",
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  ...Default.args,
  label: "Login",
  description: "Enter username or email",
};
