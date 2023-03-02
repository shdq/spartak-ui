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
Default.args = {};

export const Basic = Template.bind({});
Basic.args = {
  ...Default.args,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  ...Default.args,
  defaultChecked: true,
};
