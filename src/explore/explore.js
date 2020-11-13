import React from "react";
import {Link} from 'react-router-dom'
import Bottom from "../elements/uielements/bottom";
import "./explore.css";

function Explore() {
  const Moods = [
    { name: "Bolly Hotlist", id: "RDCLAK5uy_n9Fbdw7e6ap-98_A-8JYBmPv64v-Uaq1g" },
    { name: "Punjabi", id: "RDCLAK5uy_kuo_NioExeUmw07dFf8BzQ64DFFTlgE7Q" },
    { name: "Pop", id: "RDCLAK5uy_kmPRjHDECIcuVwnKsx2Ng7fyNgFKWNJFs" },
    { name: "On the rise", id: "RDCLAK5uy_lLFMLZs5KTup-cTK9zV2YF9guYZt2FolM" },
    { name: "Desi hiphop", id: "RDCLAK5uy_mOvRWCE7v4C98UgkSVh5FTlD3osGjolas" },
    { name: "Indie", id: "RDCLAK5uy_m_Ky21OskMNajFwYX9LjbDMVkZ7YcdkH4" },
    { name: "90s", id: "RDCLAK5uy_m3_ta3qbw52SzpnQMqfph0yPeyrBaJN-g" },
    { name: "Feel good", id: "RDCLAK5uy_nbla9IlAw2OQmPRxOiBYdAl_jtWLDPH9Y" },
    { name: "Assamese", id: "PL7eDpquJ1XwjQJd3NiBkcfDRwz82vEE7x" },
    { name: "Hiphop", id: "RDCLAK5uy_kw2wIlEv9llILhO0qoMTLsBBhmjzuibAc" },
    { name: "Malayalam", id: "RDCLAK5uy_ncdxHWKi1aBSx2MfTb9-Af0b7APn29U2g" },
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
            <Link to={`/explore/${e.id } ${e.name}`} style={{textDecoration:"none"}} key={e.name} className="genres">
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
