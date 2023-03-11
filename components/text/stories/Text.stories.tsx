import { type ComponentStory, type ComponentMeta } from "@storybook/react";
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
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text {...args}>{children}</Text>
);

const Default = Template.bind({});
Default.args = {
  children: "Example of text",
  size: "sm",
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

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  children: "Secondary text",
  secondary: true,
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...Default.args,
  children: (
    <>
      Text with{" "}
      <Text color="red" as="a" href="https://example.com">
        hyperlink
      </Text>
    </>
  ),
};

export const AsOtherElements = Template.bind({});
AsOtherElements.args = {
  ...Default.args,
  children: (
    <>
      <Text>
        <Text as="strong">Bold</Text>
      </Text>
      <Text>
        <Text as="em">Italic</Text>
      </Text>
      <Text>
        <Text as="u">Underline</Text>
      </Text>
      <Text>
        <Text as="s">Strikethrough</Text>
      </Text>
      <Text>
        2
        <Text size="xs" as="sup">
          2
        </Text>{" "}
        = 4
      </Text>
      <Text>
        H
        <Text size="xs" as="sub">
          2
        </Text>
        O
      </Text>
    </>
  ),
};
