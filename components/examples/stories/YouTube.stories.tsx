import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import App from "../YouTube/App";

const YouTubeMeta: ComponentMeta<typeof App> = {
  title: "UI Showcase",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["red", "blue", "green"],
      control: { type: "radio" },
    },
  },
  component: App,
};

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;
export const YoutubeMenu = Template.bind({});
YoutubeMenu.args = {
  color: "red",
  size: "md",
};

export default YouTubeMeta;
