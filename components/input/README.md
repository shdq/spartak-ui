# TextInput

A React component, intended to get user input

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      placeholder="Enter something"
    />;
  );
}
```

## Variants

There are two different styles of `TextInput`:

- `filled` (default)
- `outlined`

If you don't specify `variant` prop, default variant will be used.

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      variant="outlined"
      placeholder="Outlined variant"
    />;
  );
}
```

## Sizes

There are four different sizes of `TextInput`:

- `xs` – extra small
- `sm` (default) – small
- `md` – medium
- `lg` – large

If you don't specify `size` prop, default size will be used.

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      size="lg"
      placeholder="Outlined variant"
    />;
  );
}
```

## Disabled

You can disable `TextInput` by specifying `disabled` property.

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      placeholder="Disabled input"
      disabled
    />;
  );
}
```

## Icons

There are `icon` and `endIcon` properties to place icon at start or end of `TextInput`.

**NB:** You can use both properties to add both icons to `TextInput`

### Usage

```typescript
import { TextInput } from "spartak-ui";
import { IconSearch, IconMicrophone } from "@tabler/icons-react";

function App() {
  return (
    <TextInput
      icon={<IconSearch size={18} />}
      endIcon={<IconMicrophone size={18} />}
      placeholder="Search"
    />;
  );
}
```

## Label

With `label` property `TextInput` renders with proper label. There is optional `required` property, which adds <sup>`*`</sup> to the `label`.

**NB:** If you don't use `label` property, you should add `aria-label` to `TextInput` for accessibility purpose.

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      type="password"
      placeholder="Your password"
      label="Password"
      required
    />;
  );
}
```

## Description

`description` property renders as supporting text under the `TextInput`.

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      type="password"
      placeholder="Your password"
      description="Use 8 characters or more for your password"
    />;
  );
}
```

## Error

When you validate you form input, you can provide `error` property to add error message to the `TextInput`. It will highlight the input and replace description text with the error message.

### Usage

```typescript
import { TextInput } from "spartak-ui";

function App() {
  return (
    <TextInput
      type="password"
      placeholder="Your password"
      description="Use 8 characters or more for your password"
      error="Password is less than 8 characters"
    />;
  );
}
```

## Controlled

An example of controlled `TextInput` below.

```typescript
import { TextInput } from "spartak-ui";

function App() {
const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <>
      <Text mb='8px'>Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </>
  )
```
