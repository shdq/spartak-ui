# Separator

`Separator` visually divides content or data.

### Usage

```jsx
import { Separator } from "spartak-ui";

function App() {
  return (
    <Separator />
  );
}
```

This example renders in HTML as `<hr>` element.

## Orientation

To separate content either horizontally or vertically, you can use the `orientation` property, which offers two options:

- `horizontal` (default)
- `vertical`

**NB**: by default to use vertical orientation you need to specify parent's height.

### Usage with parent's height

```jsx
import { Separator } from "spartak-ui";

function App() {
  return (
    <div style={{ height: "20px" }}>
      Left
      <Separator orientation="vertical" />
      Right
    </div>
  );
}
```

**NB**: If you use `flexbox` to display items with the vertical separator between them, add `flexItem` property to apply special styles to the separator

### Usage as flexbox item

```jsx
import { Card, Separator, Text } from "spartak-ui";

function App() {
  return (
    <Card
      css={{ display: "flex", alignItems: "center" }}
    >
      <Text size="sm">Left</Text>
      <Separator orientation="vertical" flexItem />
      <Text size="sm">Right</Text>
    </Card>
  );
}
```

Look at more examples with the `Card` component in [Storybook](https://shdq.github.io/spartak-ui/?path=/story/components-card--vertical-separator-in-flex-container).
