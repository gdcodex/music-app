import React, { useEffect, useRef } from "react";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";
import {
  play,
  pause,
  next,
  prev
} from "../elements/uielements/controls";
import "./player.css";

function Player() {
  const audio = useRef();
  const [audS, setaudS] = React.useState(play);
  const [currentTime, setcurrentTime] = React.useState(0);
  const [volume, setvolume] = React.useState(100);
  const [Time, setTime] = React.useState(0);

  const sliderChange = (value, newValue) => {
    audio.current.currentTime = newValue;
    setcurrentTime(newValue);
  };
  const volumeChange = (value, newValue) => {
    audio.current.volume = newValue/100;
    setvolume(newValue);
  };
  const clickControl = () => {
    // console.log(audio.current.duration);
    setTime(audio.current.duration);
    if (audio.current.duration > 0 && audio.current.paused) {
      setaudS(pause);
      audio.current.play();
    } else {
      setaudS(play);
      audio.current.pause();
    }
  };
  useEffect(()=>{
      setvolume(audio.current.volume)
      console.log(audio.current.volume)
  },[])
  return (
   <>
      <div className="time">
        <Slider
          color="secondary"
          value={currentTime}
          max={Time}
          onChange={sliderChange}
          style={{ width: "800px" }}
          aria-labelledby="continuous-slider"
        />
      </div>

      <div className="control">
        <div className="prev">{prev}</div>
        <div className="media-control" onClick={clickControl}>
          {audS}
        </div>
        <div className="next">{next}</div>
        <div className="volume">
          <VolumeUp color="secondary" />
          <Slider
            color="secondary"
            value={volume}
            onChange={volumeChange}
            style={{ width: "100px" }}
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>
      <audio
        ref={audio}
        onEnded={()=> setaudS(play)}
        onTimeUpdate={() => {
          setcurrentTime(audio.current.currentTime);
        }}
      >
        <source
          src="https://r4---sn-5hne6nsd.googlevideo.com/videoplayback?expire=1604855347&ei=09GnX5G9Bsy51wbL8oeYDw&ip=185.73.39.44&id=o-ACug7_QJ2XE5Ct2ihpQmM1ZN-TTLHOTDYglho54Y6j_8&itag=140&source=youtube&requiressl=yes&mh=kU&mm=31%2C29&mn=sn-5hne6nsd%2Csn-5hnednlk&ms=au%2Crdu&mv=m&mvi=4&pl=23&initcwndbps=82500&vprv=1&mime=audio%2Fmp4&gir=yes&clen=3148708&dur=194.513&lmt=1604790040931141&mt=1604833592&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKv-xvM2lHJ_xanujCmAVByXtJtLDry1c0oSLNkoeFxTAiB9yvEpLAws_Qxbtlht2oUxZlR0oXF8WK5OVxPDeNOyrQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgNLQHaK6o5GmqOCkmTkyQ05s1NmjFgEehbNFIDU1VO1sCIFaS6tdB0eUWfJM6cF6CRc9-Ej_Q6GzbuIHjOTShAxnb&ratebypass=yes"
          type="audio/mpeg"
        />
      </audio>
      </>
  );
}

export default Player;
