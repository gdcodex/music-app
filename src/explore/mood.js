import React,{useCallback,useState,useEffect,useContext} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import searchapi from '../endpoints/searchapi';
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { PlayerContext } from '../endpoints/context';

const useStyles = makeStyles((theme) => ({
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
    backdrop: {
        zIndex: theme.zIndex.drawer + 10,
        color: '#fff',
      }
  }));
function Mood() {
    const classes = useStyles();
    const currentPlay = useContext(PlayerContext);
    const history = useHistory();
    const genreId = useParams().gid;
    const [moodlist, setmoodlist] = useState(null);
    const playlistChart =useCallback( async () => {
        const res = await searchapi.get("playlistItems", {
          params: {
            playlistId: genreId,
            maxResults:15
          }, 
        });
        return res.data.items;
      },[])
      useEffect(() => {
        playlistChart()
          .then((data) =>{console.log(data);setmoodlist(p=>{ return {...p,data:data}})})
          .catch((err) => console.log(err));
      }, []);
      const videoIdhandler = (e) => {
        currentPlay.settrackCurrent(e.snippet.resourceId.videoId);
        currentPlay.setcurrentlyPlaying(e.snippet.thumbnails.high.url);
        history.push(`/player/${e.snippet.resourceId.videoId}`)
      };
    return (
        <div>
       {!moodlist &&   <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="secondary" />
      </Backdrop>}
               <div key="sec2" id="result">
        <List className={classes.root}>
          {moodlist &&
            moodlist.data.map((e, i) => (
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
                <Divider variant="inset" component="li" />
              </>
            ))}
        </List>
      </div>
        </div>
    )
}

export default Mood
