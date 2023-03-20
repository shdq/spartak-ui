import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Badge } from "../../index";

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: "Components/Typography/Badge",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Badge,
  argTypes: {
    color: {
      options: ["grey", "red", "blue", "green"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template: ComponentStory<typeof Badge> = ({
  children,
  ...args
}: PropsWithChildren) => <Badge {...args}>{children}</Badge>;

const Default = Template.bind({});
Default.args = {
  children: "good first issue",
  color: "grey",
  size: "sm",
};

export const Example = Template.bind({});
Example.args = {
  ...Default.args,
};

export const Number = Template.bind({});
Number.args = {
  ...Default.args,
  color: "blue",
  children: 42,
};

export const TextOverflow = Template.bind({});
TextOverflow.args = {
  ...Default.args,
  color: "red",
  size: "xs",
  css: { width: "100px" },
  children: "Change badge size",
};

export default BadgeMeta;
