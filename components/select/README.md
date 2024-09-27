# Select

The `Select` component is intended to allow users to choose from a set of options.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
    />
  );
}
```

## Adding Options

Options should be passed to the `options` prop as an array of objects, where each object contains a `value` and a `label`. The `value` is the actual value the component will return, while the `label` is what will be displayed in the dropdown.

```jsx
options={[
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]}
```

### Dynamically Generating Options

You can generate options dynamically using a loop or an array method like `map`.

**NB:** When dynamically rendering options, ensure that each option has a unique `key` property to avoid rendering issues in React.

```jsx
import { Select } from "spartak-ui";

function App() {
  const fruitsData = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Cherry", category: "Fruit" },
  ];

  // Map the data to the format expected by Select component
  const optionsArray = fruitsData.map((fruit) => ({
    value: fruit.id,
    label: fruit.name,
    key: fruit.id,
  }));

  return <Select options={optionsArray} />;
}

export default App;
```

## Variants

There are two different styles of `Select`:

- `filled` (default)
- `outlined`

If you don't specify `variant` prop, the default variant will be used.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      variant="outlined"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
    />
  );
}
```

## Sizes

There are four different sizes of `Select`:

- `xs` – extra small
- `sm` (default) – small
- `md` – medium
- `lg` – large

If you don't specify `size` prop, the default size will be used.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      size="lg"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
    />
  );
}
```

## Disabled

You can disable `Select` by specifying `disabled` property.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
      disabled
    />
  );
}
```

## Icons

There is a build-in caret down icon used in `Select` component by default. The `icon` and `endIcon` properties allow to place an icon at the start or at the end of `Select`. You can also use both.

**NB:** If you specify `endIcon` it will replace default `Select` icon.

### Usage

```jsx
import { Select } from "spartak-ui";
import { IconUser } from "@tabler/icons-react";

function App() {
  return (
    <Select
      icon={<IconUser size={18} />}
      options={[
        { value: "1", label: "User 1" },
        { value: "2", label: "User 2" },
      ]}
    />
  );
}
```

## Label

With `label` property `Select` renders with the proper label. There is optional `required` property, which adds <sup>`*`</sup> to the `label`. You don't need to provide `id` or `for`, they will be generated for underneath HTML `input` and `label` elements automatically.

**NB:** If you don't use `label` property, you should add `aria-label` to `Select` for accessibility purpose.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      label="Select an option"
      required
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
    />
  );
}
```

## Description

`description` property renders as supporting text under the `Select`.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      label="Select an option"
      description="Choose one of the options from the list"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
    />
  );
}
```

## Error

When you validate your form input, you can provide `error` property to add an error message to the `Select`. It will highlight the input and replace the description text with the error message.

### Usage

```jsx
import { Select } from "spartak-ui";

function App() {
  return (
    <Select
      label="Select an option"
      error="You must select an option"
      options={[
        { value: "", label: "--Please choose an option--" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
    />
  );
}
```

## Controlled

An example of controlled `Select`.

```jsx
import React from "react";
import { Select } from "spartak-ui";

function App() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Select
        value={value}
        onChange={handleChange}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
      />
      <p>Selected Value: {value}</p>
    </>
  );
}
```
