import React,{useEffect, useState,useContext} from "react";
import { PlayerContext } from '../endpoints/context';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
const useStyles = makeStyles({
    root: {
    borderRadius: '10%',
    backgroundColor:"rgb(41, 39, 39)"
    },
  });
function Playercenter({videoId}) {
  const currentPlay = useContext(PlayerContext);
  const [thumbnail, setthumbnail] = useState(null)
  useEffect(() => {
    console.log(currentPlay.currentlyPlaying)
   
  }, []);




    const classes = useStyles();
  return (
    <>
      <div className="player-center">
      <div className="center-wrap">
      <Card className={classes.root}>
       <img id="player-svg" src={currentPlay.currentlyPlaying} alt="thumbnail"/>
        </Card>
      </div>
      </div>
    </>
  );
}

export default Playercenter;
