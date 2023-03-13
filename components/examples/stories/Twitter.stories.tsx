import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import App from "../Twitter/App";

const TwitterMeta: ComponentMeta<typeof App> = {
  title: "UI Showcase",
  argTypes: {
    variant: {
      options: ["filled", "outlined", "elevated"],
      control: { type: "radio" },
    },
  },
  component: App,
};

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;
export const TwitterCard = Template.bind({});
TwitterCard.args = {
  variant: "elevated",
  color: "red",
};

export default TwitterMeta;
