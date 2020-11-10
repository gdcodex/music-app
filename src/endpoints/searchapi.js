import axios from 'axios'

// const Random =() =>{
//     const value = process.env.REACT_APP_API.split(" ");
//     const key = Math.floor(Math.random()* Math.floor(value.length));
//     return value[key];
// }

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        videoCategory:10,
        key:"AIzaSyBI4NhuPS9fD3IDyncAqG-dkmvDFefX45w"
    }
})