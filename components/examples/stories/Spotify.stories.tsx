import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import App from "../Spotify/App";

const SpotifyMeta: ComponentMeta<typeof App> = {
  title: "UI Showcase",
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
