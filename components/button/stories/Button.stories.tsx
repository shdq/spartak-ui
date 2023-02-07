import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { jest, expect } from "@storybook/jest";

import { Button } from "../Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["filled", "tinted", "outlined", "text"],
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

export const TintedButton = Template.bind({});
TintedButton.args = {
  children: "Tinted",
  variant: "tinted",
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

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Text",
  variant: "text",
  color: "red",
  href: "https://example.com",
  as: "a",
};

// Button with "a" and "href" props should be rendered as <a> element
LinkButton.play = async ({ canvasElement }) => {
  // Prepare
  const canvas = within(canvasElement);

  // Act
  const link = canvas.getByRole("link");

  // Assess
  expect(link).toBeInTheDocument();
};

export const TestButtonClick = Template.bind({});
const onClickSpy = jest.fn();
TestButtonClick.args = {
  children: "Click me!",
  variant: "filled",
  color: "red",
  disabled: false,
  onClick: onClickSpy,
};

// "Click on button should call the function"
TestButtonClick.play = async ({ canvasElement }) => {
  // Prepare
  const canvas = within(canvasElement);

  // Act
  await fireEvent.click(canvas.getByRole("button"));

  // Assess
  expect(onClickSpy).toHaveBeenCalled();
};
