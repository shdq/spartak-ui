# Checkbox

An input form component that can be checked when activated.

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox />;
  );
}
```

## Checked

You can render `Checkbox` as checked by specifying `checked` property.

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox
      label="I agree"
      checked
    />;
  );
}
```

## Label

With `label` property `Checkbox` renders with the label text. There is optional `required` property, which adds <sup>`*`</sup> to the `label`. You don't need to provide `id` or `for`, they will be generated for underneath HTML `input` and `label` elements automatically.

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox
      label="I agree"
      required
    />;
  );
}
```

## Disabled

You can disable `Checkbox` by specifying `disabled` property.

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox
      label="I agree"
      disabled
    />;
  );
}
```

## Indeterminate

You can use third state of `Checkbox` by specifying `indeterminate` property. Details: [indeterminate on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate)

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox
      label="I agree"
      indeterminate
    />;
  );
}
```

## Description

`description` property renders as supporting text under the `Checkbox`. Component requires both `label` and `description` in order to render it.

You can pass other components to `description`, like `Text` in order to render a link.

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox
      label="I agree"
      description="Make sure you read the terms and conditions"
    />;
  );
}
```

## Error

When you validate your form input, you can provide `error` property to add an error message to the `Checkbox` label. It will highlight the input and replace the description text with the error message.

### Usage

```jsx
import { Checkbox } from "spartak-ui";

function App() {
  return (
    <Checkbox
      label="I agree"
      description="Make sure you read the terms and conditions"
      error="You have to agree in order to continue"
    />;
  );
}
```
