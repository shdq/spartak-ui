import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Code } from "../../index";

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
  children: "const sum = nums.reduce((acc, val) => acc + val);",
};

export const ArrayReduce = Template.bind({});
ArrayReduce.args = {
  ...Default.args,
};
