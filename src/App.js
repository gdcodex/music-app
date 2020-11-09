import React,{useState,useEffect} from "react";
import Search from "./elements/search/search";
import Player from "./media/player";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./elements/uielements/controls";
import Home from "./home/home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PlayerContext } from "./endpoints/context";

function App() {
  const [currentlyPlaying, setcurrentlyPlaying] = useState(null)
  return (
    <PlayerContext.Provider value={{
      currentlyPlaying,
      setcurrentlyPlaying
    }}>
    <ThemeProvider theme={theme}>
    <Router>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/search">
      <Search />
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
