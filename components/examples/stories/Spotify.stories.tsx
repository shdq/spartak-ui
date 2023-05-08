import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "../../stitches.config";
import App from "../Spotify/App";

const SpotifyMeta: ComponentMeta<typeof App> = {
  title: "UI Showcase",
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
  component: App,
};

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;
export const SpotifyPlaylists = Template.bind({});
SpotifyPlaylists.args = {
  variant: "filled",
  color: "green",
};

export default SpotifyMeta;
