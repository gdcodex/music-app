import axios from 'axios'

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        videoCategory:10,
        key:"AIzaSyCTbD8irYLboVu2Rvi9wFgzVxKhahcmn1E"
    }
})