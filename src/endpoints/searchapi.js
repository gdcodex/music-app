import axios from 'axios'

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        videoCategory:10,
        key:"AIzaSyANDlzLdOSuFpgPTznj-dDvsSUiCRMp43w"
    }
})