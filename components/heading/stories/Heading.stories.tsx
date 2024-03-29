import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Heading, Text, Badge } from "../../index";

const HeadingMeta: ComponentMeta<typeof Heading> = {
  title: "Components/Typography/Heading",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Heading,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "radio" },
    },
  },
};

const Template: ComponentStory<typeof Heading> = ({
  children,
  ...args
}: PropsWithChildren) => <Heading {...args}>{children}</Heading>;

const Default = Template.bind({});
Default.args = {
  children: "Hello world",
  size: "sm",
};

export const Sizes = Template.bind({});
Sizes.args = {
  children: (
    <>
      <Heading size="xxl">Title of the page in XXL size</Heading>
      <Heading size="xl">Title of the page in XL size</Heading>
      <Heading size="lg">Title of the page in LG size</Heading>
      <Heading size="md">Title of the page in MD size</Heading>
      <Heading size="sm">Title of the page in SM size</Heading>
      <Heading size="xs">Title of the page in XS size</Heading>
    </>
  ),
};

export const WithSupportingText = Template.bind({});
WithSupportingText.args = {
  children: (
    <>
      Awesome title.{" "}
      <Text as="span" secondary>
        I support it.
      </Text>
    </>
  ),
  size: "xl",
};

export const WithLink = Template.bind({});
WithLink.args = {
  children: (
    <>
      Title with{" "}
      <Text color="red" as="a" href="https://example.com">
        hyperlink
      </Text>{" "}
      in it
    </>
  ),
  size: "xl",
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  ...Default.args,
  size: "sm",
  children: (
    <>
      Heading component <Badge color="green">New</Badge>
    </>
  ),
};

export default HeadingMeta;
