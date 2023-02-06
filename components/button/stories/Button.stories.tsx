import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      name: "label",
    },
    variant: {
      options: ["filled", "toned", "outlined", "text"],
      control: { type: "select" },
    },
    color: {
      options: ["red", "blue"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const FilledButton = Template.bind({});
FilledButton.args = {
  children: "Filled",
  variant: "filled",
  color: "red",
  disabled: false,
};

export const TonedButton = Template.bind({});
TonedButton.args = {
  children: "Toned",
  variant: "toned",
  color: "red",
  disabled: false,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: "Outlined",
  variant: "outlined",
  color: "red",
  disabled: false,
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: "Text",
  variant: "text",
  color: "red",
  disabled: false,
};

