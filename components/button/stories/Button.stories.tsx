import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { jest, expect } from "@storybook/jest";
import {
  IconBell,
  IconExternalLink,
  IconMail,
  IconAdjustments,
  IconRefresh,
  IconArrowRight,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";

import { Button } from "../Button";
import { PropsWithChildren } from "react";

const icons = {
  Empty: undefined,
  Email: <IconMail size={18} />,
  Settings: <IconAdjustments size={18} />,
  Refresh: <IconRefresh size={18} />,
  "Arrow right": <IconArrowRight size={18} />,
};

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
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    endIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
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

export const IconButton = Template.bind({});
IconButton.args = {
  children: "Notifications",
  icon: <IconBell size={18} />,
  variant: "filled",
  color: "red",
  disabled: false,
};

export const SquareIconButtons = (args: PropsWithChildren) => {
  const styles: React.CSSProperties = {
    display: "flex",
    gap: 4,
  };
  return (
    <div style={styles}>
      <Button icon={<IconSun size={18} />} {...args} />
      <Button icon={<IconMoon size={18} />} {...args} />
    </div>
  );
};
SquareIconButtons.args = {
  variant: "tinted",
  color: "red",
  disabled: false,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Open link",
  variant: "text",
  color: "red",
  disabled: false,
  endIcon: <IconExternalLink size={18} />,
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
