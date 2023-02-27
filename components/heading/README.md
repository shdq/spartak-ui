# Heading

`Heading` displays any type of titles with corresponding HTML elements.

### Usage

```jsx
import { Heading } from "spartak-ui";

function App() {
  return (
    <Heading>
      Hello world!
    </Heading>;
  );
}
```

This example renders in HTML as `h2` by default

```html
<h2>Hello world!</h2>
```

## Heading levels

For rendering as `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` provide needed level to `as` property.

### Usage

```jsx
import { Heading } from "spartak-ui";

function App() {
  return (
    <Heading as="h1">
      Title of the page
    </Heading>;
  );
}
```

## Sizes

There are six different sizes of `Heading`:

- `xs` – extra small
- `sm` (default) – small
- `md` – medium
- `lg` – large
- `xl` – extra large
- `xxl` – double extra large

**NB**: If you don't specify `size` prop, the default size will be used.

### Usage

```jsx
import { Heading } from "spartak-ui";

function App() {
  return (
    <Heading size="lg">
      Large title
    </Heading>;
  );
}
```