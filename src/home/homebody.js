import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import searchapi from "../endpoints/searchapi";
import Chart from "./chart";
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 10,
      color: '#fff',
    }
  }));

function Homebody() {
    const classes = useStyles();
  const [homePlaylist, sethomePlaylist] = useState(null);
  const playlistId = {
    pop: "PLDcnymzs18LU4Kexrs91TVdfnplU3I5zs",
    topbolly: "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
    soulfullBolly: "RDCLAK5uy_mr9NXj7DL7VjL_7C0zszHlT9iM4ylxfV0",
    hiphop: "RDCLAK5uy_khpEjaQLgEhJ52L4ceWPOOnlflVYGi8sM",
    edm: "PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5",
  };
  const playlistChart =useCallback( async (data) => {
    const res = await searchapi.get("playlistItems", {
      params: {
        playlistId: data,
      },
    });
    return res.data.items;
  },[])
  useEffect(() => {
    playlistChart(playlistId.hiphop)
      .then((data) =>{console.log(data);sethomePlaylist(p=>{ return {...p,hiphop:data}})})
      .catch((err) => console.log(err));
    playlistChart(playlistId.pop)
      .then((data) => sethomePlaylist(p=>{ return {...p,pop:data}}))
      .catch((err) => console.log(err));
    playlistChart(playlistId.soulfullBolly)
      .then((data) => sethomePlaylist(p=>{ return {...p,soulfullBolly:data}}))
      .catch((err) => console.log(err));
    playlistChart(playlistId.topbolly)
      .then((data) => sethomePlaylist(p=>{ return {...p,topbolly:data}}))
      .catch((err) => console.log(err));
    playlistChart(playlistId.edm)
      .then((data) => sethomePlaylist(p=>{ return {...p,edm:data}}))
      .catch((err) => console.log(err));
  }, []);

  return <div className="home-body-chart">
  {   !homePlaylist &&
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="secondary" />
      </Backdrop>}
  {
      homePlaylist &&
      <>
      <Chart data={homePlaylist.pop} title="Top Pop"/>
      <Chart data={homePlaylist.topbolly} title="Top Bollywood"/>
      <Chart data={homePlaylist.hiphop} title="Top Hiphop"/>
      <Chart data={homePlaylist.soulfullBolly} title="Soulful Bollywood"/>
      <Chart data={homePlaylist.edm} title="EDM" />
      </>
  }
    
  </div>;
}

export default Homebody;
