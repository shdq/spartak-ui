import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../Input";

export default {
  component: Input,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  disabled: false,
};
