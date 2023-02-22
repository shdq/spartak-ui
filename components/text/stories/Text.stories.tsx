import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Text } from "../Text";

export default {
  title: "Components/Typography/Text",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Text,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text {...args}>{children}</Text>
);

export const Default = Template.bind({});
Default.args = {
  children: "Example of text",
};

export const Sizes = Template.bind({});
Sizes.args = {
  children: (
    <>
      <Text size="xs">The quick brown fox jumps over the lazy dog</Text>
      <Text size="sm">The quick brown fox jumps over the lazy dog</Text>
      <Text size="md">The quick brown fox jumps over the lazy dog</Text>
      <Text size="lg">The quick brown fox jumps over the lazy dog</Text>
      <Text size="xl">The quick brown fox jumps over the lazy dog</Text>
    </>
  ),
};
