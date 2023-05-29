import { type PropsWithChildren } from "react";
import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import { Separator } from "../../index";

const SeparatorMeta: ComponentMeta<typeof Separator> = {
  title: "Components/Separator",
  decorators: [
    (Story) => (
      <div className={useDarkMode() ? darkTheme.className : undefined}>
        <Story />
      </div>
    ),
  ],
  component: Separator,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
};

const Template: ComponentStory<typeof Separator> = ({
  ...args
}: PropsWithChildren) => <Separator {...args} />;

const Default = Template.bind({});
Default.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  orientation: "horizontal",
};

export default SeparatorMeta;
