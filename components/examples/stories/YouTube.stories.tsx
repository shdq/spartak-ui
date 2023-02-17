import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../YouTube/App";

export default {
  title: "Examples",
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["red", "blue"],
      control: { type: "radio" },
    },
  },
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => (
  <App {...args} />
);
export const Youtube = Template.bind({});
Youtube.args = {
  color: "red",
  size: "md"
}
