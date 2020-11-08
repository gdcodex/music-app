import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'


export const suggest = (term) => {
    const URL  = `https://clients1.google.com/complete/search`;
    return axios({
      url: URL,
      adapter: jsonpAdapter,
      params: {
        client: "youtube",
        hl: "en",
        ds: "yt",
        q: term,
      }
    })
    .then((res) => {
      if (res.status !== 200) {
        throw Error("Suggest API not 200!");
      }
      return res.data[1].map((i) => i[0]);
    })
  }