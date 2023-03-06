import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Code } from "../Code";

export default {
  title: "Components/Typography/Code",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Code,
  argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = ({ children, ...args }) => (
  <Code {...args}>{children}</Code>
);

const Default = Template.bind({});
Default.args = {
  children: "nums[i]",
};

export const Basic = Template.bind({});
Basic.args = {
  ...Default.args
};
