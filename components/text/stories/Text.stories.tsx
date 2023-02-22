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
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text {...args}>{children}</Text>
);

export const Default = Template.bind({});
Default.args = {
  children: "Example of text",
};
