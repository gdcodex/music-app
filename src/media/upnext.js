import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import searchY from "../endpoints/searchapi";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { PlayerContext } from "../endpoints/context";
const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    height: "50vh",
  },
  root: {
    width: "100vw",
    maxWidth: "100vw",
    backgroundColor: " rgb(24, 23, 23)",
    color: "#8b8a8a",
    marginLeft: "5%",
  },
  inline: {
    display: "inline",
  },
  stick: {
    position: "sticky",
    top: "0",
    zIndex: 20,
    background: "white",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 10,
    color: "#fff",
  },
}));

function Upnext({ videoId,audio,settrack }) {
  const [load, setload] = useState(false);
  const [relatedVids, setrelatedVids] = useState(null);
  useEffect(() => {
    searchY
      .get("/search", {
        params: {
          relatedToVideoId: videoId,
          maxResults: 10,
        },
      })
      .then((res) => setrelatedVids(res.data.items))
      .catch((err) => console.log(err));
  }, []);
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });
  const currentPlay = useContext(PlayerContext);
  const history = useHistory();

  const videoIdhandler = async(e) => {
    setload(true)
      var config = {
        method: "get",
        url: `http://localhost:5000/song/?id=${e.id.videoId}`,
        headers: {},
      };
    await  axios(config)
        .then(function (response) {
          setload(false)
          console.log("trackchange")
          history.push(`/player/${e.id.videoId}`);
          currentPlay.settrackCurrent(response.data);
          settrack(response.data)
          currentPlay.setcurrentlyPlaying(e.snippet.thumbnails.high.url);
          audio.current.pause();
          audio.current.load();
          audio.current.play();
        })
        .catch(function (error) {
          setload(false)
          console.log(error);
        });
  
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"text"} className={classes.stick}>
          <ListItemText primary={"Upnext"} />
        </ListItem>
        {relatedVids &&
          relatedVids.map((e, i) => (
            <>
              <ListItem
                key={e + i}
                style={{ cursor: "pointer" }}
                onClick={() => videoIdhandler(e)}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="img" src={e.snippet.thumbnails.medium.url} />
                </ListItemAvatar>
                <ListItemText primary={e.snippet.title} />
              </ListItem>
            </>
          ))}
      </List>
    </div>
  );
  return (
    <div>
     {load && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      <React.Fragment key={"bottom"}>
        <Button color="secondary" onClick={toggleDrawer("bottom", true)}>
          {"Upnext"}
        </Button>

        <Drawer
          anchor={"bottom"}
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Upnext;


