import axios from 'axios'
const REACT_APP_API_KEY = "AIzaSyDKuWFzMBrW56RNuKx2LKSxRrmhozw-agY AIzaSyAYZXRLgSOyrCP9ZOQYWGj4KjiaiGMjdu4 AIzaSyCLojsm8QEwZ7dpw-QIR2vkGyH0I2vNcvo AIzaSyANDlzLdOSuFpgPTznj-dDvsSUiCRMp43w AIzaSyCTbD8irYLboVu2Rvi9wFgzVxKhahcmn1E AIzaSyAGW_xTf2CEZN2uHt1M-2YJyQqna_fxATA AIzaSyDF1fohAW3Pu0UDbvZ7o6IGRQnSIIKDsK0"
const Random =() =>{
    const value = REACT_APP_API_KEY.split(" ");
    const key = Math.floor(Math.random()* Math.floor(value.length));
    return value[key];
}

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        videoCategory:10,
        key:Random()
    }
})