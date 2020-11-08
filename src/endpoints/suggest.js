import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'


export const suggest = (term) => {
    const GOOGLE_AC_URL  = `https://clients1.google.com/complete/search`;
    return axios({
      url: GOOGLE_AC_URL,
      adapter: jsonpAdapter,
      params: {
        client: "youtube",
        hl: "en",
        ds: "yt",
        q: term,
      }
    })
    .then((res) => {
      console.log("jsonp results >> ", res);
      if (res.status !== 200) {
        throw Error("Suggest API not 200!");
      }
      return 1;
    })
  }