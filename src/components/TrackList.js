import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/usePlayerProvider";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  const [playing, setPlaying] = useState(currentTrackName);

  useEffect(() => {
    console.log(playing);
  }, [playing]);

  const handleClick = (index) => {
    playTrack(index);
    setPlaying(currentTrackName);
  };
  return (
    <Box>
      <Box
        sx={{
          mt: 25,
          top: "center",
          left: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" color="black" sx={{ m: 2 }}>
          {playing}
        </Typography>
        {trackList.map((track, index) => (
          <Card sx={{ width: 300 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                onClick={() => handleClick(index)}
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {track.name}
                </Typography>
                <IconButton>
                  <PlayArrowIcon />
                </IconButton>
              </CardContent>
            </Box>
          </Card>
        ))}
        <Card sx={{ width: 300 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 2,
              }}
            >
              <IconButton>
                <SkipPreviousIcon />
              </IconButton>
              <IconButton>
                <PlayArrowIcon />
              </IconButton>
              <IconButton>
                <SkipNextIcon />
              </IconButton>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default TrackList;
