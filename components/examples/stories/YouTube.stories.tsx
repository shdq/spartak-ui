import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../YouTube/App";

export default {
  title: "Examples",

  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => (
  <App />
);

export const Youtube = Template.bind({});