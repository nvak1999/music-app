import React, { useState } from "react";
import Track1 from "./track1.mp3";
import Track2 from "./track2.mp3";
import Track3 from "./track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Wake up to the Renaissance 1",
      file: Track1,
    },
    {
      name: "Wake up to the Renaissance 2",
      file: Track2,
    },
    {
      name: "Wake up to the Renaissance 3",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
