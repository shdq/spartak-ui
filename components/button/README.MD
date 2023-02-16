# Button

Polymorphic React component, use it as a button or a link.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return <Button>Click me!</Button>;
}
```

## Variants

There are four different styles of `Button`:

- `filled` (default)
- `tinted`
- `outlined`
- `text`

If you don't specify `variant` prop, default variant will be used.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return <Button variant="outlined">Outlined</Button>;
}
```

## Colors

There are several built-in `color` palettes available for `Button`:

- `red` (default)
- `blue`

If you don't specify `color` prop, default variant will be used.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return <Button color="blue">Blue</Button>;
}
```

## Sizes

There are four different sizes of `Button`:

- `xs` – extra small sized button
- `sm` (default) – small sized button
- `md` – medium sized button
- `lg` – large size button

If you don't specify `size` prop, default size will be used.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return <Button size="lg">Large</Button>;
}
```

## Icons

There are `icon` and `endIcon` properties to place icon before and after `Button` label.

**NB:** `icon` property has a priority, if you use both properties, only one icon from `icon` will be rendered.

### Usage

```typescript
import { Button } from "spartak-ui";
import { IconBell } from "@tabler/icons-react";

function App() {
  return <Button icon={<IconBell size={18} />}>Notifications</Button>;
}
```

Button with `icon` property and without children renders and square button with icon.

```typescript
import { Button } from "spartak-ui";
import { IconSun } from "@tabler/icons-react";

function App() {
  return <Button icon={<IconSun size={18} />} variant="tinted" />;
}
```

## Disabled

You can disable `Button` by specifying `disabled` property.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return <Button disabled>Submit</Button>;
}
```

## Button as a link

Provide HTML element name `a` to `as` property and `href` with path or URL to render `Button` component as a link. If you provider only `href` it will be ignored.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return (
    <Button variant="text" as="a" href="https://example.com">
      This is a link
    </Button>
  );
}
```

## Combined style

You can combine variants. Example below will render blue tinted button.

### Usage

```typescript
<Button variant="tinted" color="blue">
  Combined style
</Button>
```
