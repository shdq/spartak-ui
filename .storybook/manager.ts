import { addons } from "@storybook/addons";

addons.setConfig({
  showPanel: true,
  panelPosition: "right",
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true,
    },
  },
});
