# Button

Polymorphic React component, use it as a button or a link.

### Usage

```typescript
import { Button } from "spartak-ui";

function App() {
  return (
    <Button>Click me!</Button>
  );
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
<Button variant="outlined">Outlined</Button>
```

## Colors

There are several built-in `color` palettes available for `Button`:

- `red` (default)
- `blue`

If you don't specify `color` prop, default variant will be used.

### Usage

```typescript
<Button color="blue">Blue</Button>
```

## Disabled

You can disable `Button` by specifying `disabled` property.

### Usage

```typescript
<Button disabled>Submit</Button>
```

## Button as a link

Provide HTML element name `a` to `as` property and `href` with path or URL to render `Button` component as a link.

### Usage

```typescript
<Button variant="text" as="a" href="https://example.com">This is a link</Button>
```

## Combined style

You can combine variants. Example below will render blue tinted button.

### Usage

```typescript
<Button variant="tinted" color="blue">Combined style</Button>
```
