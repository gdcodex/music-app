import React,{useContext} from "react";
import { PlayerContext } from '../endpoints/context';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
const useStyles = makeStyles({
    root: {
    borderRadius: '50%',
    backgroundColor:"black"
    },
  });
function Playercenter() {
  const currentPlay = useContext(PlayerContext);
    const classes = useStyles();
  return (
    <>
      <div className="player-center">
      <div className="center-wrap">
      <Card className={classes.root}>
       <img id="player-svg" src={currentPlay.currentlyPlaying || "/playercenter.png"} alt="thumbnail"/>
        </Card>
      </div>
      </div>
    </>
  );
}

export default Playercenter;
