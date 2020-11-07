import React,{useEffect} from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import PauseCircleFilledOutlinedIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeUp from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';

import "./app.css";

function App() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#ff9100',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });


  let play = (
    <ThemeProvider theme={theme}>
    <PlayCircleFilledOutlinedIcon
      style={{ fontSize: "3.1rem" }}
      color="secondary"
    />
  </ThemeProvider>
  );
  let pause = (
    <ThemeProvider theme={theme}>
    <PauseCircleFilledOutlinedIcon
      style={{ fontSize: "3.1rem" }}
      color="secondary"
    />
  </ThemeProvider>
  );
  let next = <SkipNextIcon color="secondary" style={{ fontSize: "3.1rem" }} />;
  let prev = (
    <SkipPreviousIcon color="secondary" style={{ fontSize: "3.1rem" }} />
  );

  const [audS, setaudS] = React.useState(play);
  const [currentTime, setcurrentTime] = React.useState(0);
  const [Time, setTime] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
    <div className="time">
      <Slider color="secondary"  value={currentTime} max={Time} style={{width:"800px"}}  aria-labelledby="continuous-slider" />
    </div>
   
  
      <div className="control">
        <div className="prev">{prev}</div>
        <div
          className="media-control"
          onClick={() => {
            let aud = document.getElementById("dsed");
            console.log(aud.duration);
            setcurrentTime(aud.currentTime)
            setTime(aud.duration)
            if (aud.duration > 0 && aud.paused) {
              setaudS(pause);
              document.getElementById("dsed").play();
            } else {
              setaudS(play);
              document.getElementById("dsed").pause();
            }
          }}
        >
          {audS}
        </div>
        <div className="next">{next}</div>
        <div className="volume">
        <VolumeUp color="secondary" />
        <Slider color="secondary" value={30} style={{width:"100px"}}  aria-labelledby="continuous-slider" />
    </div>
      </div>
      <audio id="dsed" onTimeUpdate={()=>{
          setcurrentTime(document.getElementById("dsed").currentTime)
      }}>
          <source
            src="https://r6---sn-5hne6n7s.googlevideo.com/videoplayback?expire=1604772645&ei=xY6mX4akCY-EWJ-ZsNAN&ip=185.73.39.44&id=o-AMQzLw2yGpVEeQccxOgSGAjtFncTPgYPEGS9NIi2Q9rA&itag=140&source=youtube&requiressl=yes&mh=OG&mm=31%2C26&mn=sn-5hne6n7s%2Csn-4g5edned&ms=au%2Conr&mv=m&mvi=6&pl=24&initcwndbps=61250&vprv=1&mime=audio%2Fmp4&gir=yes&clen=3725595&dur=230.156&lmt=1604749978010016&mt=1604750912&fvip=6&keepalive=yes&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAN_Vl1Tx-5zPwdeU046XsfriSohSrsCivMpWm1dmmjCCAiALPm60YaF8gHjOzDF192QQcWpCU1XnpafqHQdwn3w69A%3D%3D&ratebypass=yes&sig=AOq0QJ8wRAIgE8F5f6qg0RoivIAziGAePIS4nqphviGHRGNKYzq7ogUCIA4D2OBcfQVWETw_rTp2OniaXLU9E0ONZnRwTQeXIxrm"
            type="audio/mpeg"
          />
        </audio>
    </ThemeProvider>
  );
}

export default App;
{/* <Grid container spacing={2}>
        <Grid item>
          <VolumeUp color="secondary" />
        </Grid>
        <Grid item xs>
          <Slider color="secondary" value={30} style={{width:"100px"}}  aria-labelledby="continuous-slider" />
        </Grid>
       
        </Grid> */}
