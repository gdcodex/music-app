import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import searchY from '../../endpoints/searchapi';

function Search() {
    const [song, setsong] = useState("");
    const [Songlist, setSonglist] = useState([]);
    const changeHandler = (e) =>{
        console.log(e.target.value)
        let value = e.target.value
        setsong(value)
    }
    const clickHandler = async() =>{
        const res = await searchY.get('/search',{
            params:{
                q:song,
                maxResults:10
            }
        })
        if(res){
            setSonglist(res.data)
            console.log(res.data)
        }
    }

    return (
        <div>
             <TextField id="standard-basic" color="secondary" autoFocus={true} value={song} onChange={changeHandler} label="Standard" />
             <Button color="secondary" small="true" onClick={clickHandler}><SearchIcon fontSize="small"/></Button>
        </div>
    )
}

export default Search
