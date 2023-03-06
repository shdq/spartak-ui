# Code

`Code` displays inline code examples, keywords, shell commands, etc.

### Usage

```jsx
import { Code } from "spartak-ui";

function App() {
  return (
    <Code>
      const number = 362017;
    </Code>;
  );
}
```

This example renders in HTML as `code`:

```html
<code>const number = 362017;</code>
```

## Colors

There are several built-in `color` palettes available for `Code`:

- `red`
- `blue`
- `green`

### Usage

```jsx
import { Code } from "spartak-ui";

function App() {
  return (
    <Code color="green">
      console.log("Hello world");
    </Code>;
  );
}
```

## Inside typography components

It is intended to use inside typography components hence `Code`'s font size is 90% of the parent's font size.

### Usage

```jsx
import { Code, Text } from "spartak-ui";

function App() {
  return (
    <Text>
      <Code>Number</Code> values represent floating-point numbers like{" "}
      <Code>37</Code> or <Code>-9.25</Code>.
    </Text>
  );
}
```
