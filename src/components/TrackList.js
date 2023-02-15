import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/usePlayerProvider";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import "../style.css";

function TrackList() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
    togglePlay,
  } = useMusicPlayer();

  const [trackIndex, setTrackIndex] = useState(0);
  useEffect(() => {
    console.log(isPlaying, trackIndex);
  }, [isPlaying, trackIndex]);

  const handleClick = (index, trackName) => {
    playTrack(index);
    setTrackIndex(index);
  };

  return (
    <Box>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
        <Box
          sx={{
            top: "center",
            left: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            color="black"
            sx={{ m: 2, borderBottom: 1, width: 260, pb: 2 }}
          >
            {currentTrackName ? currentTrackName : "Track List"}
          </Typography>
          {trackList.map((track, index) => (
            <Box sx={{ width: 300 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  onClick={() => handleClick(index, track.name)}
                  sx={{}}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">{track.name}</Typography>
                    <IconButton>
                      {isPlaying && currentTrackName === track.name ? (
                        <PauseIcon />
                      ) : (
                        <PlayArrowIcon />
                      )}
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          ))}
          <Box sx={{ width: 300 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{
                  mt: 3,
                  flex: "1 0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <IconButton>
                  <SkipPreviousIcon
                    fontSize="large"
                    onClick={playPreviousTrack}
                  />
                </IconButton>
                <IconButton>
                  {!isPlaying ? (
                    <PlayArrowIcon
                      fontSize="large"
                      onClick={() => togglePlay()}
                    />
                  ) : (
                    <PauseIcon fontSize="large" onClick={() => togglePlay()} />
                  )}
                </IconButton>
                <IconButton>
                  <SkipNextIcon fontSize="large" onClick={playNextTrack} />
                </IconButton>
              </CardContent>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default TrackList;
