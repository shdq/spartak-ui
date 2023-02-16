import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { darkTheme } from "../../stitches.config";
import { TextInput } from "../TextInput";

export default {
  title: "Components/Input",
  component: TextInput,
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput data-testid="input" {...args} />;

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