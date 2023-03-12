import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Checkbox } from "../index";

export default {
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
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ children, ...args }) => (
  <Checkbox {...args}>{children}</Checkbox>
);

const Default = Template.bind({});
Default.args = {
  size: "sm",
};

export const Basic = Template.bind({});
Basic.args = {
  ...Default.args,
};

export const CheckedByDefault = Template.bind({});
CheckedByDefault.args = {
  ...Default.args,
  defaultChecked: true,
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
