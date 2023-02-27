import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Heading, Text } from "../../index";

export default {
  title: "Components/Typography/Heading",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Heading,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello world",
  size: "sm",
};

export const Sizes = Template.bind({});
Sizes.args = {
  children: (
    <>
      <Heading size="xxl">Title of the page in XXL size</Heading>
      <Heading size="xl">Title of the page in XL size</Heading>
      <Heading size="lg">Title of the page in LG size</Heading>
      <Heading size="md">Title of the page in MD size</Heading>
      <Heading size="sm">Title of the page in SM size</Heading>
      <Heading size="xs">Title of the page in XS size</Heading>
    </>
  ),
};
