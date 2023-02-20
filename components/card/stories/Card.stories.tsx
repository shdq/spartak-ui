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
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, ...args }) => (
  <Card {...args}>{children}</Card>
);

export const Basic = Template.bind({});
Basic.args = {
  children: <CardBody>Basic card</CardBody>,
};
