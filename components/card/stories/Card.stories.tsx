import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: ["filled", "outlined", "elevated"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, ...args }) => (
  <Card {...args}>{children}</Card>
);

const Default = Template.bind({});
Default.args = {
  size: "sm",
  variant: "filled",
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  children: <CardBody>Filled card</CardBody>,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  children: <CardBody>Outlined card</CardBody>,
  variant: "outlined",
};

export const Elevated = Template.bind({});
Elevated.args = {
  ...Default.args,
  children: <CardBody>Elevated card</CardBody>,
  variant: "elevated",
};
