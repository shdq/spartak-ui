# Badge

`Badge` displays badges, tags, highlights something

### Usage

```jsx
import { Badge } from "spartak-ui";

function App() {
  return (
    <Badge>good first issue</Badge>;
  );
}
```

## Variants

There are three different styles of `Badge`:

- `filled` (default)
- `tinted`
- `outlined`

If you don't specify `variant` prop, the default variant will be used.

### Usage

```jsx
import { Badge } from "spartak-ui";

function App() {
  return (
    <Badge variant="outlined">
      Outlined
    </Badge>;
  );
}
```

## Colors

There are several built-in `color` palettes available for `Badge`:

- `red` (default)
- `blue`
- `green`

If you don't specify `color` prop, the default variant will be used.

### Usage

```jsx
import { Badge } from "spartak-ui";

function App() {
  return (
    <Badge color="blue">
      Blue
    </Badge>;
  );
}
```

## Sizes

There are four different sizes of `Badge`:

- `xs` – extra small
- `sm` (default) – small
- `md` – medium
- `lg` – large

If you don't specify `size` prop, the default size will be used.

### Usage

```jsx
import { Badge } from "spartak-ui";

function App() {
  return (
    <Badge size="lg">
      Large
    </Badge>;
  );
}
```

## Badge as a link

Provide HTML element name `a` to `as` property and `href` with path or URL to render `Badge` component as a link.

### Usage

```jsx
import { Badge } from "spartak-ui";

function App() {
  return (
    <Badge
      as="a"
      href="https://example.com"
    >
      Click on me
    </Badge>
  );
}
```

## Combined style

You can combine variants. The example below will render a blue, tinted badge.

### Usage

```jsx
<Badge variant="tinted" color="blue">
  Combined style
</Badge>
```
