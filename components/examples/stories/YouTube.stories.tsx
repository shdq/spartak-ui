import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../YouTube/App";

export default {
  title: "UI Showcase",
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
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => (
  <App {...args} />
);
export const YoutubeMenu = Template.bind({});
YoutubeMenu.args = {
  color: "red",
  size: "md"
}
