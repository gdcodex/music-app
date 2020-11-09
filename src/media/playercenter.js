import React,{useContext} from "react";
import { PlayerContext } from '../endpoints/context';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
const useStyles = makeStyles({
    root: {
    borderRadius: '10%',
    backgroundColor:"rgb(41, 39, 39)"
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
       <img id="player-svg" src={currentPlay.currentlyPlaying || "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="thumbnail"/>
        </Card>
      </div>
      </div>
    </>
  );
}

export default Playercenter;
