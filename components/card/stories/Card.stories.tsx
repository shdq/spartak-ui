import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../index";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { Switch } from "../../provider/Switch";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Switch />
        <div
          style={{
            width: "200px",
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, ...args }) => (
  <Card {...args}>{children}</Card>
);

export const Filled = Template.bind({});
Filled.args = {
  children: <CardBody>Filled card</CardBody>,
  size: "sm",
};
