import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Code } from "../../index";

const CodeMeta: ComponentMeta<typeof Code> = {
  title: "Components/Typography/Code",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Code,
  argTypes: {
    color: {
      options: ["red", "blue", "green"],
      control: { type: "radio" },
    },
  },
};

const Template: ComponentStory<typeof Code> = ({
  children,
  ...args
}: PropsWithChildren) => <Code {...args}>{children}</Code>;

const Default = Template.bind({});
Default.args = {
  children: 'console.log("Hello World");',
};

export const Example = Template.bind({});
Example.args = {
  ...Default.args,
};

export const Colors = Template.bind({});
Colors.args = {
  ...Default.args,
  color: "red",
};

export default CodeMeta;
