import React, {  useRef } from "react";
import { play, pause, next, prev } from "../elements/uielements/controls";
import "./player.css";
import Playercenter from "./playercenter";
import SliderControl from "./slider";
import Upnext from "./upnext";

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
          onEnded={() => setaudS(play)}
          onTimeUpdate={() => {
            setcurrentTime(audio.current.currentTime);
          }}
        >
          <source
            src="https://r5---sn-5hnekn7k.googlevideo.com/videoplayback?expire=1604905326&ei=DpWoX5vIJZbqgAfswZKQCw&ip=185.73.39.44&id=o-AJSTfL6jmLKj9iWtnf39M8GHyhSFLiPPyPaQUIZe4D0s&itag=140&source=youtube&requiressl=yes&mh=v6&mm=31%2C29&mn=sn-5hnekn7k%2Csn-5hne6ns6&ms=au%2Crdu&mv=m&mvi=5&pl=23&initcwndbps=103750&vprv=1&mime=audio%2Fmp4&gir=yes&clen=3206163&dur=198.066&lmt=1570268711560993&mt=1604883638&fvip=5&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhALJv_SY6CxdiTaQrGXUah3SS4bfUcQ9W4Jv-EvDPuFUsAiAE6b3iTQIvDmc8GT6D4xltzinJPHXJ_Df6zzmtUqJ52g%3D%3D&ratebypass=yes&sig=AOq0QJ8wRAIgCB-PhRKTMDpYjZH4iVGp5vLNcMke69L3FUbIC3mQ2toCIGFAkfW3_qrbX_Np2n4xNrupZYvM5VypZIXhJEKGQ9i4"
            type="audio/mpeg"
          />
        </audio>
        <div className="upnext">
          {/* <h4 className="upnext-heading">Upnext</h4>
          <h4 className="upnext-heading">Up</h4> */}
          <Upnext/>
        </div>
       
      </main>
    </>
  );
}

export default Player;
