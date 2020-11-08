import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import searchY from "../../endpoints/searchapi";
import {suggest} from "../../endpoints/suggest";
import './search.css'

function Search() {
  const [song, setsong] = useState("");
  const [Songlist, setSonglist] = useState(null);
  const [Suggestlist, setSuggestlist] = useState(null);
  const [focus, setfocus] = useState(true);
  const changeHandler = async(e) => {
    e.persist();
    let value = e.target.value;
    setsong(value);
   const suggestRes = await suggest(value)
   setSuggestlist(suggestRes)
    
  };
  const clickHandler = () => {
    console.log(song)
     searchY.get("/search", {
      params: {
        q:  song,
        maxResults: 10,
      },
    }).then(res=>{
        setSonglist(res.data.items);
        console.log(res.data.items);
    }).catch(err=>console.log(err))
  
  };
  const sClickHandler = (e) => {
    console.log(song)
     searchY.get("/search", {
      params: {
        q:  e,
        maxResults: 10,
      },
    }).then(res=>{
        setSonglist(res.data.items);
        console.log(res.data.items);
    }).catch(err=>console.log(err))
  
  };
  useEffect(()=>{
      if(Songlist)
      document.getElementById("suggestion").style.zIndex=-2
  },[Songlist])
  return (
    <div key="anh">
      <TextField
        id="standard-basic"
        color="secondary"
        autoFocus={true}
        onFocus={()=>{document.getElementById("suggestion").style.zIndex=2}}
        value={song}
        onChange={changeHandler}
        label="Standard"
      />
      <Button color="secondary" small="true" onClick={clickHandler}>
        <SearchIcon fontSize="small" />
      </Button>
      <div id="suggestion">
      {Suggestlist && Suggestlist.map((e,i)=><p key={e+i} onClick={()=>{
          setsong(e);
          return sClickHandler(e)
      }} key={e}>{e}</p>)}
      </div>
      <div id="result">
      {Songlist && Songlist.map((e,i)=><p key={i}>{e.snippet.title}</p>)}
      </div>
    </div>
  );
}

export default Search;
