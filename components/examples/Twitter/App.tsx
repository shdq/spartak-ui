import {
  ThemeProvider,
  Avatar,
  Button,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "../../index";
import { Switch } from "../../provider/Switch";

type Colors = "red" | "blue" | "green";
type Variants = "filled" | "outlined" | "elevated";
export interface AppProps {
  variant: Variants;
  color: Colors;
}

const App = ({ color, variant }: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <Switch color={color} />
      <Card css={{ marginTop: "15px", width: "250px" }} variant={variant}>
        <CardHeader css={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1447920585506496521/RgBsNyEO_400x400.jpg"
            round
            size="lg"
          >
            SC
          </Avatar>
          <Button
            as="a"
            href="https://twitter.com/shdq"
            variant="filled"
            color={color}
          >
            Follow
          </Button>
        </CardHeader>
        <CardBody
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingBottom: "15px",
          }}
        >
          <div>
            <Heading size="sm">Sergei Cherniaev </Heading>
            <Text size="sm" secondary>
              @shdq
            </Text>
          </div>
          <Text size="sm">
            Software Engineer (front-end). Father of a son. I&apos;m building{" "}
            <Text
              as="a"
              href="https://github.com/shdq/spartak-ui"
              target="_blank"
              color={color}
            >
              @SpartakUI
            </Text>
          </Text>
        </CardBody>
        <CardFooter>
          <Text size="sm">
            <strong>98</strong>{" "}
            <Text as="span" secondary>
              Following
            </Text>{" "}
            <strong>209</strong>{" "}
            <Text as="span" secondary>
              Followers
            </Text>
          </Text>
        </CardFooter>
      </Card>
    </ThemeProvider>
  );
};

export default App;
