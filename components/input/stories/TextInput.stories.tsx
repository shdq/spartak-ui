import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { IconSearch, IconMicrophone, IconEye } from "@tabler/icons-react";
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
    variant: {
      options: ["filled", "outlined"],
      control: { type: "select" },
    },
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <IconSearch size={18} />,
  placeholder: "Search",
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  ...Default.args,
  endIcon: <IconEye size={18} />,
  placeholder: "Your password",
  type: "password",
};

export const WithBothIcon = Template.bind({});
WithBothIcon.args = {
  ...Default.args,
  icon: <IconSearch size={18} />,
  endIcon: <IconMicrophone size={18} />,
  placeholder: "Search",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "Label text",
};

export const WithRequiredLabel = Template.bind({});
WithRequiredLabel.args = {
  ...Default.args,
  label: "Label text",
  required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: "Description text",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Error message",
};

export const RequiredLabelAndDescription = Template.bind({});
RequiredLabelAndDescription.args = {
  ...Default.args,
  label: "Label text",
  description: "Description text",
  required: true,
};

export const RequiredLabelWithErrorAndDescription = Template.bind({});
RequiredLabelWithErrorAndDescription.args = {
  ...Default.args,
  label: "Label text",
  description: "Description text",
  error: "Error message",
  required: true,
};
