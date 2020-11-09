import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
const useStyles = makeStyles({
    root: {
    borderRadius: '10%',
    backgroundColor:"rgb(41, 39, 39)"
    },
  });
function Playercenter() {
    const classes = useStyles();
  return (
    <>
      <div className="player-center">
      <div className="center-wrap">
      <Card className={classes.root}>
       <img id="player-svg" src="https://upload.wikimedia.org/wikipedia/en/f/fa/Ed_Sheeran_-_Beautiful_People.png" alt=""/>
        </Card>
      </div>
      </div>
    </>
  );
}

export default Playercenter;
