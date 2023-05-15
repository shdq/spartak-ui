![SpartakUI-horizontal](https://user-images.githubusercontent.com/1219618/221339447-230fd4c0-3e3f-4f7c-8c86-e8fef2968930.png)

# Spartak UI

A collection of React components

## Components

**Forms**

- [Button](https://github.com/shdq/spartak-ui/tree/main/components/button#button)
- [Text Input](https://github.com/shdq/spartak-ui/tree/main/components/text-input#text-input)

**Typography**

- [Code](https://github.com/shdq/spartak-ui/tree/main/components/code#code)
- [Heading](https://github.com/shdq/spartak-ui/tree/main/components/heading#heading)
- [Text](https://github.com/shdq/spartak-ui/tree/main/components/text#text)

**Display content**

- [Avatar](https://github.com/shdq/spartak-ui/tree/main/components/avatar#avatar)
- [Badge](https://github.com/shdq/spartak-ui/tree/main/components/badge#badge)
- [Card](https://github.com/shdq/spartak-ui/tree/main/components/card#card)

Check out [Storybook](https://shdq.github.io/spartak-ui/) for visual look of the components.

## Examples built with Spartak UI

- [Spotify Playlists](https://shdq.github.io/spartak-ui/?path=/story/ui-showcase--spotify-playlists) with `Button`, `Card`, `Heading` and `Text` components
- [Twitter Card](https://shdq.github.io/spartak-ui/?path=/story/ui-showcase--twitter-card) with `Avatar`, `Button`, `Card`, and typography components
- [YouTube Side Menu](https://shdq.github.io/spartak-ui/?path=/story/ui-showcase--youtube-menu) with `Button` component

## Installation

### npm

```bash
npm install spartak-ui
```

### yarn

```bash
yarn add spartak-ui
```

## Dark theme

There are `ThemeProvider` and `useTheme` hook to add dark theme to your app. Wrap your app component in `ThemeProvider`.

### Usage

#### `ThemeProvider` wrapper

```jsx
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

```jsx
import { useTheme, Button } from "spartak-ui";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const Switch = () => {
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

## Author

Sergei Cherniaev ([@shdq](https://twitter.com/shdq))

## Credits

- Logo icon designed by [Sam Smith](https://samsmith.name/)
- Font designed by [Omnibus-Type](https://www.omnibus-type.com)

## License

[MIT License](https://github.com/shdq/spartak-ui/blob/main/LICENSE) 
