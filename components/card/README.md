# Card

`Card` contains content on a single subject.

It has `CardHeader`, `CardBody`, and `CardFooter` components to structure the content inside the card.

### Usage

```jsx
import { Card, CardBody } from "spartak-ui";

function App() {
  return (
    <Card>
      <CardBody>
        This is card
      </CardBody>
    </Card>
  );
}
```

## Variants

There are three different styles of `Card`:

- `filled` (default)
- `outlined`
- `elevated`

If you don't specify `variant` prop, the default variant will be used.

### Usage

```jsx
import { Card, CardBody } from "spartak-ui";

function App() {
  return (
    <Card variant="outlined">
      <CardBody>
        This is outlined card
      </CardBody>
    </Card>
  );
}
```

## Card with full structure

`CardFooter` is sticky to the bottom of `Card`.

### Usage

```jsx
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text
} from from "spartak-ui";

function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Header</h2>
      </CardHeader>
      <CardBody>
        <Text>Body</Text>
      </CardBody>
      <CardFooter>
        <Text>Footer</Text>
      </CardFooter>
    </Card>
  );
}
```
