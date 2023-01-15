import { useState } from "react";
import { Typography, List, ListItem, ListItemText, Stack } from "@mui/material";

import moment from "moment";

import Cover from "./components/Cover";
import tracks from "./data/tracks";
import Player from "./Player";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isSelected = (item) => selectedIndex === item;
  var track = tracks.find((e) => e.id === selectedIndex);

  const toPrevTrack = () => {
    if (selectedIndex - 1 < 0) {
      setSelectedIndex(tracks.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (selectedIndex < tracks.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
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
    <div className="App">
      <Cover>
        <Player track={track} onNext={toNextTrack} onLast={toPrevTrack}>
          <TrackList />
        </Player>
      </Cover>
    </div>
  );
}

export default App;
