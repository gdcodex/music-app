import React,{useState} from "react";
import Search from "./elements/search/search";
import Player from "./media/player";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./elements/uielements/controls";
import Home from "./home/home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PlayerContext } from "./endpoints/context";
import Explore from './explore/explore';
import Mood from './explore/mood';
import Landing from "./home/landing";

function App() {
  const [currentlyPlaying, setcurrentlyPlaying] = useState(null)
  const [trackCurrent, settrackCurrent] = useState(null);
  return (
    <PlayerContext.Provider value={{
      currentlyPlaying,
      setcurrentlyPlaying,
      trackCurrent,
      settrackCurrent
    }}>
    <ThemeProvider theme={theme}>
    <Landing/>
    <Router>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/search">
      <Search />
    </Route>
    <Route exact path="/explore">
      <Explore/>
    </Route>
    <Route exact path="/explore/:gid">
      <Mood/>
    </Route>
    <Route exact path={`/player/:pid`}>
      <Player />
    </Route>
    </Switch>
    </Router>
    </ThemeProvider>
    </PlayerContext.Provider>
  );
}

export default App;
