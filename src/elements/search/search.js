import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import searchY from "../../endpoints/searchapi";
import { suggest } from "../../endpoints/suggest";
import "./search.css";
import Searchbody from "./searchbody";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(-0.25),
      width: "80vw",
      color: "seashell",
      paddingTop: "7px",
      fontSize: "large",
    },
  },
}));
function Search() {
  const classes = useStyles();

  const [song, setsong] = useState("");
  const [Songlist, setSonglist] = useState(null);
  const [Suggestlist, setSuggestlist] = useState(null);
  const changeHandler = async (e) => {
    e.persist();
    let value = e.target.value;
    setsong(value);
    const suggestRes = await suggest(value);
    setSuggestlist(suggestRes);
  };
  const clickHandler = () => {
    console.log(song);
    searchY
      .get("/search", {
        params: {
          q: song,
          maxResults: 10,
        },
      })
      .then((res) => {
        setSonglist(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  const sClickHandler = (e) => {
    console.log(song);
    searchY
      .get("/search", {
        params: {
          q: e,
          maxResults: 10,
        },
      })
      .then((res) => {
        setSonglist(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (Songlist) document.getElementById("suggestion").style.zIndex = -2;
  }, [Songlist]);
  return (
    <div key="anh" className="search-container">
      <section  className="text-area">
        <ArrowBackIcon fontSize="default" color="secondary" />
        <TextField
          className={classes.root}
          id="standard-basic"
          color="secondary"
          autoFocus={true}
          onFocus={() => {
            document.getElementById("suggestion").style.zIndex = 2;
          }}
          value={song}
          onChange={changeHandler}
          label="Songs"
        />

        <Button color="secondary" small="true" onClick={clickHandler}>
          <SearchIcon fontSize="default" />
        </Button>
      </section>
      <Searchbody
        Suggestlist={Suggestlist}
        Songlist={Songlist}
        setsong={setsong}
        sClickHandler={sClickHandler}
      />
    </div>
  );
}

export default Search;
