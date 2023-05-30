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
}: PropsWithChildren) => (
  <div style={{ height: "20px" }}>
    <Separator {...args} />
  </div>
);

const Default = Template.bind({});
Default.args = {
  orientation: "horizontal",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  orientation: "vertical",
};

export default SeparatorMeta;
