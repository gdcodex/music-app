import React, {useRef, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { play, pause, next, prev } from "../elements/uielements/controls";
import "./player.css";
import Playercenter from "./playercenter";
import { PlayerContext } from '../endpoints/context';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
  const history = useHistory();
  const classes = useStyles();
  const videoId = useParams().pid;
  const currentPlay = useContext(PlayerContext);
  const audio = useRef();
  const [audS, setaudS] = React.useState(play);
  const [currentTime, setcurrentTime] = React.useState(0);
  const [volume, setvolume] = React.useState(100);
  const [Time, setTime] = React.useState(0);
  const [track, settrack] = React.useState(null);

  useEffect(() => {
  
    var config = {
      method: 'get',
      url: `${process.env.REACT_APP_URL}/song/?id=${videoId}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      settrack(response.data)
      setaudS(pause)
      currentPlay.settrackCurrent(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [videoId,currentPlay]);
  const sliderChange = (value, newValue) => {
    audio.current.currentTime = newValue;
    setcurrentTime(newValue);
  };
  const volumeChange = (value, newValue) => {
    audio.current.volume = newValue / 100;
    setvolume(newValue);
  };
  const clickControl = () => {
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
        <section className="back-player-arrow">
        <div>
        <ArrowBackIcon onClick={()=>history.goBack()} fontSize="default" color="secondary"  />
        </div>
      </section>
      {!track && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      {track && (
        <main className="player-body">
          <Playercenter />
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
            autoPlay
            onPlay={()=>{setTime(audio.current.duration)}}
            onEnded={() => setaudS(play)}
            onTimeUpdate={() => {
              setcurrentTime(audio.current.currentTime);
            }}
          >
            <source src={track} type="audio/mpeg" />
          </audio>
          <div className="upnext">
            <Upnext videoId={videoId} audio={audio} settrack={settrack} setTime={setTime}/>
          </div>
        </main>
      )}
    </>
  );
}

export default Player;
