import React, { useRef } from "react";
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
  const [Time, setTime] = React.useState(0);

  const sliderChange = (value, newValue) => {
    audio.current.currentTime = newValue;
    setcurrentTime(newValue);
  };
  const clickControl = () => {
    console.log(audio.current.duration);
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
            value={30}
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
          src="https://r4---sn-5hne6nsd.googlevideo.com/videoplayback?expire=1604827915&ei=q2anX7OENJmD0wXwkoXYCQ&ip=185.73.39.44&id=o-AJP-AdzdPN313BJHMe4pBm7WAPxAKOhrrEKcq0mILBam&itag=140&source=youtube&requiressl=yes&mh=kU&mm=31%2C26&mn=sn-5hne6nsd%2Csn-aigl6nl7&ms=au%2Conr&mv=m&mvi=4&pl=23&initcwndbps=100000&vprv=1&mime=audio%2Fmp4&gir=yes&clen=3148708&dur=194.513&lmt=1604790040931141&mt=1604806123&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhALhtg8a5YD4AOhyav24Wp3E9rjlJiqWa8oOqsIpwJSjvAiEA84bAqaq6Do7elQ3rseyY8oEJV8sKVySfg93toobr7Gc%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIrRvuvsJZSdZ3ZEyukPz-HixRATS_0uLwDFGQterJTnAiEAzR8zy9E9eU1H3mOAeCDKglIZMygv-hEL_ht3QTcd9YQ%3D&ratebypass=yes"
          type="audio/mpeg"
        />
      </audio>
      </>
  );
}

export default Player;
