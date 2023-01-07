import { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
  Space,
} from "@mui/material";
import moment from "moment";
import AspectRatio from "@mui/joy/AspectRatio";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import tracks from "./data/tracks";
import Player from "./Player";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  var track = tracks.find((e) => e.id === selectedIndex);

  function isSelected(item) {
    return selectedIndex === item;
  }

  const Layers = (count) => {
    return (
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
        }}
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={-0.1}
          factorY={-0.1}
          style={{
            transform: "scale(1.2)",
            position: "absolute",
            display: "flex",
            opacity: 1,
            backfaceVisibility: "hidden",
          }}
        >
          <img height="100%" width="100%" src="cover.jpg" alt="" />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          style={{
            transform: "scale(1.2)",
            position: "absolute",
            display: "flex",
            opacity: 0.8,
            backfaceVisibility: "hidden",
          }}
        >
          <img height="100%" width="100%" src="cover.jpg" alt="" />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          style={{
            transform: "scale(1.2)",
            position: "absolute",
            display: "center",
            opacity: 0.6,
            display: "flex",
            backfaceVisibility: "hidden",
          }}
        >
          <img height="100%" width="100%" src="cover.jpg" alt="" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.5}
          factorY={0.5}
          style={{
            transform: "scale(1.2)",
            position: "absolute",
            display: "center",
            opacity: 0.4,
          }}
        >
          <img height="100%" width="100%" src="cover.jpg" alt="" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    );
  };

  const header = () => {
    return (
      <AspectRatio ratio="1/1">
        <Box
          sx={{
            margin: 10,
          }}
        >
          {/* <AspectRatio ratio="1/1"> */}
          <Player track={track}>
            <TrackList />
          </Player>
          {/* </AspectRatio> */}
        </Box>
        <Layers style={{ top: 0 }} />
      </AspectRatio>
    );
  };

  const TrackList = () => {
    return (
      tracks.length > 0 && (
        <List className="list" component="nav">
          {tracks.map((item, i) => {
            return (
              <ListItem
                key={"item_" + i}
                button
                selected={isSelected(i)}
                onClick={() => setSelectedIndex(i)}
              >
                <ListItemText
                  align="left"
                  primary={
                    <Stack direction="row" spacing={2}>
                      <Typography type="body2">{i + 1}.</Typography>
                      <Typography type="body2">{item.name}</Typography>
                    </Stack>
                  }
                />
                <ListItemText
                  align="right"
                  secondary={moment.utc(item.duration * 1000).format("mm:ss")}
                />
              </ListItem>
            );
          })}
        </List>
      )
    );
  };

  return (
    <>
      <div className="App">
        <Stack>{header()}</Stack>
      </div>
    </>
  );
}

export default App;
