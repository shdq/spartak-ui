import { Button, Heading, Text, Card, CardHeader, CardBody } from "../../index";
import { styled } from "../../stitches.config";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

type Colors = "red" | "blue" | "green";
type Variants = "filled" | "outlined" | "elevated";
export interface AppProps {
  variant: Variants;
  color: Colors;
}

const App = ({ color, variant }: AppProps): JSX.Element => {
  const playlists = [
    {
      title: "Focus",
      description: "Find your focus, increase your productivity.",
      cover:
        "https://images.unsplash.com/photo-1616446760319-89e19d7cbd8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      title: "lofi beats",
      description:
        "The chillest beats to help you relax, study, code, and focus.",
      cover:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Chill vibes",
      description: "Enhance your relax and chill with peacefull music.",
      cover:
        "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const Div = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr));",
    gap: "15px",
    margin: "16px 0",
  });

  const Image = styled("img", {
    width: "100%",
    objectFit: "cover",
    borderRadius: "$3",
    aspectRatio: "1 / 1",
    boxShadow: "$boxShadow",
  });

  const PlayButton = styled(Button, {
    opacity: 0,
    position: "absolute",
    bottom: "32px",
    right: "8px",
    borderRadius: "9999px",
    "&:hover": { transform: "scale(1.04)" },
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  });

  const cards = playlists.map(({ title, description, cover }) => {
    return (
      <Card
        css={{
          minWidth: "300",
          cursor: "pointer",
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          [`&:hover ${PlayButton}`]: {
            opacity: 1,
            bottom: "41px",
            transition: 2000,
          },
        }}
        variant={variant}
        key={title}
      >
        <CardHeader
          css={{
            position: "relative",
          }}
        >
          <Image draggable="false" src={cover} />
          <PlayButton
            size="lg"
            color={color}
            icon={<IconPlayerPlayFilled size={22} />}
          />
          <Heading size="xs" css={{ paddingTop: "8px" }}>
            {title}
          </Heading>
        </CardHeader>
        <CardBody
          css={{
            overflow: "hidden",
          }}
        >
          <Text
            size="sm"
            secondary
            css={{
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": 2,
            }}
          >
            {description}
          </Text>
        </CardBody>
      </Card>
    );
  });

  return <Div>{cards}</Div>;
};

export default App;
