# Avatar

`Avatar` displays a profile picture, icon, or initials as text placeholder.

## Placeholder

Wrap text initials with `Avatar` component to render it as placeholder text.

### Usage

```jsx
import { Avatar } from "spartak-ui";

function App() {
  return (
    <Avatar>SC</Avatar>;
  );
}
```

## Icon

There is `icon` property to use icon as placeholder.

**NB:** `icon` property has a priority over placeholder text, if you use both, only one icon will be rendered.

### Usage

```jsx
import { Avatar } from "spartak-ui";
import { IconUser } from "@tabler/icons-react";

function App() {
  return (
    <Avatar icon={<IconUser />} />
  );
}
```

## Image

Pass an `URL` of an image to `src` property of `Avatar` component, to render this image.

**NB:** Don't forget to add `alt` property with descriptive text for your image to make component accessible.

### Usage

```jsx
import { Avatar } from "spartak-ui";

function App() {
  return (
    <Avatar
      src="userpic.png"
      alt="User's profile picture"
    />;
  );
}
```

## Round

There is `round` property to make `Avatar` round shape.

### Usage

```jsx
import { Avatar } from "spartak-ui";

function App() {
  return (
    <Avatar round>SC</Avatar>;
  );
}
```

## Sizes

There are four different sizes of `Avatar`:

- `xs` – extra small avatar
- `sm` (default) – small avatar
- `md` – medium sized avatar
- `lg` – large sized avatar

If you don't specify `size` prop, the default size will be used.

### Usage

```jsx
import { Avatar } from "spartak-ui";

function App() {
  return (
    <Avatar size="lg">
      LG
    </Avatar>;
  );
}
```

## Status

`status` prop will render a badge with status for `Avatar`. There are three different statuses:

- `online` – `green` badge, to show that user is online
- `busy` – `red` badge, to show that user is busy (do not disturb)
- `offline` – `grey` badge, to show that user is offline
- `unread` – `blue` badge, to show that user has unread notifications or messages

### Usage

```jsx
import { Avatar } from "spartak-ui";

function App() {
  return (
    <Avatar status="online">
      SC
    </Avatar>;
  );
}
```