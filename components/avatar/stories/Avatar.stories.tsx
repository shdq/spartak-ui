import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Avatar } from "../Avatar";
import { IconUser } from "@tabler/icons-react";

export default {
  title: "Components/Avatar",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Avatar,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    round: {
      options: [true, false],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = ({ children, ...props }) => (
  <Avatar {...props}>{children}</Avatar>
);

const Default = Template.bind({});
Default.args = {
  size: "sm",
  round: false,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Default.args,
  children: "SC",
};

export const Round = Template.bind({});
Round.args = {
  ...Default.args,
  round: true,
  children: "SC",
};

export const Image = Template.bind({});
Image.args = {
  ...Default.args,
  src: "https://avatars.githubusercontent.com/u/1219618",
  alt: "Sergei Cherniaev",
};

export const RoundWithImage = Template.bind({});
RoundWithImage.args = {
  ...Default.args,
  round: true,
  src: "https://avatars.githubusercontent.com/u/1219618",
  alt: "Sergei Cherniaev",
};

export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  icon: <IconUser stroke={2} size="80%" />,
};
