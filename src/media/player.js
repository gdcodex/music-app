import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { play, pause, next, prev } from "../elements/uielements/controls";
import "./player.css";
import Playercenter from "./playercenter";
import SliderControl from "./slider";
import Upnext from "./upnext";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 10,
    color: "#fff",
  },
}));

function Player() {
  const classes = useStyles();
  const videoId = useParams().pid;
  const audio = useRef();
  const [audS, setaudS] = React.useState(play);
  const [currentTime, setcurrentTime] = React.useState(0);
  const [volume, setvolume] = React.useState(100);
  const [Time, setTime] = React.useState(0);
  const [track, settrack] = React.useState(null);
  useEffect(() => {
    console.log(videoId)
    var config = {
      method: 'get',
      url: `http://localhost:5000/song/?id=${videoId}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      settrack(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
 

  const sliderChange = (value, newValue) => {
    audio.current.currentTime = newValue;
    setcurrentTime(newValue);
  };
  const volumeChange = (value, newValue) => {
    audio.current.volume = newValue / 100;
    setvolume(newValue);
  };
  const clickControl = () => {
    console.log(track)
    setTime(audio.current.duration);
    if (audio.current.duration > 0 && audio.current.paused) {
      setaudS(pause);
      audio.current.play();
    } else {
      setaudS(play);
      audio.current.pause();
    }
  };
  return (
    <>
      {!track && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      {track && (
        <main className="player-body">
          <Playercenter videoId={videoId}/>
          <SliderControl
            currentTime={currentTime}
            sliderChange={sliderChange}
            Time={Time}
            prev={prev}
            next={next}
            volume={volume}
            volumeChange={volumeChange}
            clickControl={clickControl}
            audS={audS}
          />
          <audio
            ref={audio}
            onEnded={() => setaudS(play)}
            onTimeUpdate={() => {
              setcurrentTime(audio.current.currentTime);
            }}
          >
            <source src={track} type="audio/mpeg" />
          </audio>
          <div className="upnext">
            <Upnext />
          </div>
        </main>
      )}
    </>
  );
}

export default Player;
