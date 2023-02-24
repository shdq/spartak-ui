# Spartak UI

A React Components Library.

Check out [Storybook](https://shdq.github.io/spartak-ui/) for visual look of components.

## Components

- [Button](https://github.com/shdq/spartak-ui/tree/main/components/button#button)
- [Card](https://github.com/shdq/spartak-ui/tree/main/components/card#card)
- [Input](https://github.com/shdq/spartak-ui/tree/main/components/input#textinput)
- [Text](https://github.com/shdq/spartak-ui/tree/main/components/text#text)

## Examples built with Spartak UI

- [Spotify Playlists](https://shdq.github.io/spartak-ui/?path=/story/ui-showcase--spotify-playlists) with `Button`, `Card`, and `Text` components
- [YouTube Side Menu](https://shdq.github.io/spartak-ui/?path=/story/ui-showcase--youtube-menu) with `Button` component

## Dark theme

There are `ThemeProvider` and `useTheme` hook to add dark theme to your app. Wrap your app component into `ThemeProvider`.

### Usage

#### `ThemeProvider` wrapper

```typescript
import { ThemeProvider } from "spartak-ui";

function Example() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

For switching themes let's add a component that utilizes `useTheme` hook.

#### `Switch` component

```typescript
import { useTheme, Button } from "spartak-ui";
import { IconSun, IconMoon } from "@tabler/icons-react";

const Switch = () => {
  const { theme, setTheme } = useTheme();
  const isThemeDark = theme === "dark";
  return (
    <Button
      onClick={
        () => setTheme(
        isThemeDark ?
        "light" :
        "dark")
      }
      icon={
        isThemeDark ?
        <IconSun /> :
        <IconMoon />
      }
      variant="text"
    />
  );
};
```
Import and add `Switch` component into your `<App />` and that's it.