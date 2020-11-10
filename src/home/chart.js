import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PlayerContext } from "../endpoints/context";
function Chart({ data, title }) {
  const currentPlay = useContext(PlayerContext);
  const history = useHistory();
  const videoIdhandler = (e) => {
    currentPlay.setcurrentlyPlaying(e.snippet.thumbnails.high.url);
    console.log(e.snippet.resourceId.videoId);
    history.push(`/player/${e.snippet.resourceId.videoId}`);
  };
  return (
    <div className="chart">
      {data && <h3 className="chart-title">{title}</h3>}
      <div className="chart-body">
        {data &&
          data.map((e, i) => (
            <div
              key={e + i}
              className="home-card"
              onClick={() => videoIdhandler(e)}
            >
              <img
                alt="track/play"
                src={e.snippet.thumbnails.high.url}
                className="home-card-image"
              />
              <p className="home-card-text">
                {e.snippet.title.slice(0, 70) + " ..."}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Chart;
