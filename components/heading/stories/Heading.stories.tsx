import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Heading } from "../Heading";

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
  argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello world",
};
