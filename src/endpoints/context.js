import { createContext } from "react";

export const PlayerContext = createContext({
  currentlyPlaying:null,
  trackCurrent:null,
  setcurrentlyPlaying:()=>{},
  settrackCurrent:()=>{}
});