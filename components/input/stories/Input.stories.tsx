import { ComponentStory, ComponentMeta } from "@storybook/react";

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Input } from "../Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input data-testid="input" {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  type: "text",
  disabled: false,
};

export const FilledInput = Template.bind({});
Empty.args = {
  type: "text",
  disabled: false,
};
FilledInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('input'), 'some value');

  // Assert DOM structure
  await expect(
    canvas.getByTestId('input')
  ).toBeInTheDocument();
};