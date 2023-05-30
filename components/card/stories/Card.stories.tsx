import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Button, TextInput, Checkbox, Text, Separator } from "../../index";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";

const CardMeta: ComponentMeta<typeof Card> = {
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
  },
};

const Template: ComponentStory<typeof Card> = ({
  children,
  ...args
}: PropsWithChildren) => <Card {...args}>{children}</Card>;

const Default = Template.bind({});
Default.args = {
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

export const WithSeparator = Template.bind({});
WithSeparator.args = {
  ...Default.args,
  children: (
    <CardBody>
      Top content
      <Separator />
      Bottom content
    </CardBody>
  ),
};

export const VerticalSeparatorInFlexContainer = Template.bind({});
VerticalSeparatorInFlexContainer.args = {
  ...Default.args,
  children: (
    <CardBody css={{ display: "flex", alignItems: "center" }}>
      <Text size="md">Left content</Text>
      <Separator orientation="vertical" flexItem />
      <Text size="md">Right content</Text>
    </CardBody>
  ),
};

const loginForm = (
  <>
    <CardHeader
      css={{
        textAlign: "center",
        fontWeight: 600,
        fontSize: "$lg",
        color: "$grey700",
        marginBottom: "8px",
      }}
    >
      Log in
    </CardHeader>
    <CardBody css={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TextInput label="Email" placeholder="Enter your email" />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Checkbox label="Remember me" />
      <Button>Continue</Button>
    </CardBody>
    <CardFooter css={{ textAlign: "center" }}>
      <Text
        size="sm"
        color="red"
        as="a"
        href="https://example.com"
        target="_blank"
      >
        Forgot your password?
      </Text>
    </CardFooter>
  </>
);

export const CardWithForm = Template.bind({});
CardWithForm.args = {
  ...Default.args,
  children: loginForm,
  variant: "elevated",
  css: { width: "280px" },
};

export default CardMeta;
