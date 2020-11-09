import React from "react";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";

function SliderControl({
  currentTime,
  sliderChange,
  Time,
  prev,
  next,
  volume,
  volumeChange,
  clickControl,
  audS,
}) {
  return (
    <>
      <div className="time">
        <Slider
          color="secondary"
          value={currentTime}
          max={Time}
          onChange={sliderChange}
          style={{ width: "800px" }}
          aria-labelledby="continuous-slider"
        />
      </div>
      <div className="control">
        <div className="prev">{prev}</div>
        <div className="media-control" onClick={clickControl}>
          {audS}
        </div>
        <div className="next">{next}</div>
        <div className="volume">
          <VolumeUp color="secondary" />
          <Slider
            color="secondary"
            value={volume}
            onChange={volumeChange}
            style={{ width: "100px" }}
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>
    </>
  );
}

export default SliderControl;
