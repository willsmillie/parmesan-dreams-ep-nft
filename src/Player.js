import { useEffect, useState, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  minWidth: 100,
  maxWidth: 320,
  margin: "auto",
  position: "relative",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider({
  track,
  children,
  onToggle,
  isPlaying,
  onNext,
  onLast,
}) {
  const { name, album, artist, path } = track;

  const theme = useTheme();
  let audio = new Audio(track.path);

  const audioRef = useRef(audio);
  const intervalRef = useRef();
  const isReady = useRef(false);

  const duration = audioRef.current.duration || 0;
  const currentTime = audioRef.current.currentTime || 0;
  const [trackProgress, setTrackProgress] = useState(0);

  function setIsPlaying(play) {
    onToggle(play);
  }

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        onNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  // Toggle playback when isPlaying changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(path);
    audioRef.current.crossOrigin = "anonymous";
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [track]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  return (
    <Widget sx={{ marginTop: "4%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CoverImage>
          <img alt="track-artwork" src={"cover.jpg"} />
        </CoverImage>
        <Box sx={{ ml: 1.5, minWidth: 0 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {artist}
          </Typography>
          <Typography noWrap>
            <b>{name}</b>
          </Typography>
          <Typography noWrap letterSpacing={-0.25}>
            {album}
          </Typography>
        </Box>
      </Box>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={currentTime}
        min={0}
        max={Number(duration)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        onChange={(x, value) => {
          onScrub(value);
        }}
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
          height: 4,
          "& .MuiSlider-thumb": {
            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:before": {
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === "dark"
                  ? "rgb(255 255 255 / 16%)"
                  : "rgb(0 0 0 / 16%)"
              }`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}
      >
        <TinyText>{formatDuration(currentTime.toFixed(0))}</TinyText>
        <TinyText>
          -{formatDuration((track.duration - currentTime).toFixed(0))}
        </TinyText>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song" onClick={onLast}>
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={isPlaying ? "play" : "pause"}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          ) : (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          )}
        </IconButton>
        <IconButton aria-label="next song" onClick={onNext}>
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <VolumeDownRounded htmlColor={lightIconColor} />
        <Slider
          aria-label="Volume"
          defaultValue={100}
          onChange={(e) => {
            let v = e.target.value / 100;
            audioRef.current.volume = Number(v);
          }}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUpRounded htmlColor={lightIconColor} />
      </Stack>
      <Stack>{children}</Stack>
    </Widget>
  );
}
