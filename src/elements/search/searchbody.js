import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100vw',
      maxWidth: '100vw',
      backgroundColor: " rgb(41, 39, 39)",
      color:"seashell",
      marginLeft:"2%"
    },
    inline: {
      display: 'inline',
    },
  }));

function Searchbody({Suggestlist,Songlist,setsong,sClickHandler}) {
    const classes = useStyles();
    return (
        <section  className="search-bottom">
        <div key="sec1" id="suggestion">
        <List className={classes.root}>
        {Suggestlist &&
            Suggestlist.map((e, i) => <>
      <ListItem key={e+i} alignItems="flex-start" onClick={() => {
                  setsong(e);
                  return sClickHandler(e);
                }}>
        <ListItemAvatar>
          <SearchIcon />
        </ListItemAvatar>
        <ListItemText
          primary={e}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>)}
      </List>
        </div>
        <div key="sec2" id="result">
        <List className={classes.root}>
        {Songlist && Songlist.map((e, i) => <>
      <ListItem key={e+i} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="img" src={e.snippet.thumbnails.medium.url} />
        </ListItemAvatar>
        <ListItemText
          primary={e.snippet.title}
      
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>)}
      </List>
        </div>
        </section>
    )
}

export default Searchbody
