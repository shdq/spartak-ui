import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { IconUser } from "@tabler/icons-react";
import { darkTheme } from "../../stitches.config";
import { Select } from "../Select";

const SelectMeta: ComponentMeta<typeof Select> = {
  title: "Components/Forms/Select",
  component: Select,
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
    disabled: {
      control: { type: "boolean" },
    },
  },
};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const Default = Template.bind({});
Default.args = {
  variant: "filled",
  size: "sm",
  disabled: false,
  placeholder: "Select an option",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
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
  value: "option1",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <IconUser size={18} />,
  placeholder: "Select an option",
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

export const WithLabelDisabled = Template.bind({});
WithLabelDisabled.args = {
  ...Default.args,
  disabled: true,
  label: "Label text",
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

export const WithLabelWithIconWithDesc = Template.bind({});
WithLabelWithIconWithDesc.args = {
  ...Default.args,
  icon: <IconUser size={18} />,
  label: "Label text",
  description: "Description",
};

export default SelectMeta;
