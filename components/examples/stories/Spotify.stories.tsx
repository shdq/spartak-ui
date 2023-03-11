import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import App from "../Spotify/App";

export default {
  title: "UI Showcase",
  argTypes: {
    variant: {
      options: ["filled", "outlined", "elevated"],
      control: { type: "radio" },
    },
  },
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;
export const SpotifyPlaylists = Template.bind({});
SpotifyPlaylists.args = {
  variant: "filled",
  color: "green",
};
