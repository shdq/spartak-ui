import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Badge } from "../../index";

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: "Components/Badge",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Badge,
  argTypes: {
    variant: {
      options: ["filled", "tinted", "outlined"],
      control: { type: "radio" },
    },
    color: {
      options: ["red", "blue", "green"],
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
  children: 42,
  variant: "filled",
  color: "red",
  size: "sm",
};

export const Colors = Template.bind({});
Colors.args = {
  ...Default.args,
};

export const Variants = Template.bind({});
Variants.args = {
  ...Default.args,
  variant: "tinted",
  color: "green",
  children: "good first issue",
};

export const Sizes = Template.bind({});
Sizes.args = {
  ...Default.args,
  size: "lg",
  children: "WARNING",
};

export const TextOverflow = Template.bind({});
TextOverflow.args = {
  ...Default.args,
  color: "blue",
  size: "xs",
  css: { width: "100px" },
  children: "Change badge size",
};

export default BadgeMeta;
