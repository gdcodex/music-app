import React from "react";
import {Link} from 'react-router-dom'
import Bottom from "../elements/uielements/bottom";
import "./explore.css";

function Explore() {
  const Moods = [
    { name: "Romance", id: "RDCLAK5uy_lg3oz8N53WWmrM60RTjeRy0-NSmf3Qygw" },
    { name: "Chill", id: "RDCLAK5uy_lRMLObaWWMHaptjA8bFFAwag5Q1tzeouI" },
    { name: "R&B Soul", id: "RDCLAK5uy_mu-BhJj3yO1OXEMzahs_aJVtNWJwAwFEE" },
    { name: "Dance & electronics", id: "RDCLAK5uy_kLWIr9gv1XLlPbaDS965-Db4TrBoUTxQ8" },
    { name: "Desi hiphop", id: "RDCLAK5uy_mOvRWCE7v4C98UgkSVh5FTlD3osGjolas" },
    { name: "Indie", id: "RDCLAK5uy_n17q7_2dwfDqWckpccDyTTkZ-g03jXuII" },
    { name: "90s", id: "RDCLAK5uy_m3_ta3qbw52SzpnQMqfph0yPeyrBaJN-g" },
    { name: "Travel", id: "RDCLAK5uy_l8ohbe556smHVTBGt3YcKCsrablXt_BXk" },
    { name: "Workout & Gym", id: "RDCLAK5uy_mHwfbEzQvvj2WrL9rQCGUyuWAKOdN-Qwg" },
    { name: "Rock", id: "RDCLAK5uy_mSK4KDaW4wVEem5iUX0kd30a4CigMd47A" },
    { name: "Malayalam", id: "RDCLAK5uy_nT-zkEpc2x7AVVP0XV9JvHSfkFsOtGMR8" },
    { name: "K-pop & asian", id: "RDCLAK5uy_mbWYIhyeB2KyvAnUGjooZ6eAMZUb28sEc" },
  ];
  return (
    <>
      <div className="head-mood">
        <img src="./reverb.png" alt="Mood" id="genre-head" />
      </div>
      <div className="explore">
        <div className="mood">
          {Moods.map((e, i) => (
            <Link to={`/explore/${e.id}`} style={{textDecoration:"none"}} key={e.name} className="genres">
              {e.name}
            </Link>
          ))}
        </div>
        <div className="footer" style={{ height: "180px" }}></div>
        <Bottom />
      </div>
    </>
  );
}

export default Explore;
