import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Button } from "../Button";
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

const icons = {
  Empty: undefined,
  Email: <IconMail size={18} />,
  Settings: <IconAdjustments size={18} />,
  Refresh: <IconRefresh size={18} />,
  "Arrow right": <IconArrowRight size={18} />,
};

export default {
  title: "Components/Button",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Button,
  argTypes: {
    variant: {
      options: ["filled", "tinted", "outlined", "text"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["red", "blue", "green"],
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

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

const Default = Template.bind({});

Default.args = {
  color: "red",
  size: "sm",
  disabled: false,
};

export const FilledButton = Template.bind({});
FilledButton.args = {
  ...Default.args,
  children: "Filled",
  variant: "filled",
};

export const TintedButton = Template.bind({});
TintedButton.args = {
  ...Default.args,
  children: "Tinted",
  variant: "tinted",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  ...Default.args,
  children: "Outlined",
  variant: "outlined",
};

export const TextButton = Template.bind({});
TextButton.args = {
  ...Default.args,
  children: "Text",
  variant: "text",
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...Default.args,
  children: "Notifications",
  icon: <IconBell size={18} />,
  variant: "filled",
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
  ...Default.args,
  variant: "tinted",
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  ...Default.args,
  children: "Open link",
  variant: "text",
  endIcon: <IconExternalLink size={18} />,
  href: "https://example.com",
  as: "a",
};
