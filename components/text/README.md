# Text

`Text` displays text, links, and other text information.

### Usage

```jsx
import { Text } from "spartak-ui";

function App() {
  return (
    <Text>
      Example of text
    </Text>;
  );
}
```

This example renders in HTML as `div`

```html
<div>Example of text</div>
```

## Sizes

There are five different sizes of `Text`:

- `xs` – extra small-sized text
- `sm` – small sized text
- `md` – medium sized text
- `lg` – large sized text
- `xl` – extra large sized text

**NB**: By default font size is `inherited`. So you should specify the size of the outer `Text` component.

### Usage

```jsx
import { Text } from "spartak-ui";

function App() {
  return (
    <Text size="lg">
      Large text
    </Text>;
  );
}
```

## Colors

There are several built-in `color` palettes available for `Text`:

- `red`
- `blue`

### Usage

```jsx
import { Text } from "spartak-ui";

function App() {
  return (
    <Text color="red">
      Text in red
    </Text>;
  );
}
```

It is useful if you need to render a link and color it. See the example below.

## Text as another element

`Text` renders as `<div>` by default, if you need `<span>`, `<p>` or `a` provide HTML element name to `as` property.

Some of the HTML elements to render `Text` to:

- `strong` – **bold**
- `em` – *italic*
- `u`- <u>underline</u>
- `s` – <s>strikethrough</s>
- `sup`- x<sup>2<sup>
- and etc.

Let's create a link with `href` with the URL. It will be underlined, but you also may specify the color.

### Usage

```jsx
import { Text } from "spartak-ui";

function App() {
  return (
    <Text as="p" size="md">
      Text with 
      <Text
        as="a"
        href="https://example.com"
        color="red"
      >
      link
      </Text>
    </Text>
  );
}
```

This example renders in HTML as a medium-sized paragraph with the red, underlined link inside:

```html
<p>Text with <a href="https://example.com">link</a></p>
```

## Secondary text

If you want the text to be dimmed, provide `secondary` boolean property to `Text`.

### Usage

```jsx
import { Text } from "spartak-ui";

function App() {
  return (
    <>
      <Text size="md">
        Primary text
      </Text>
      <Text size="sm" secondary>
        Supporting text
      </Text>
    </>
  );
}
```