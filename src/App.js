import React from "react";
import Search from "./elements/search/search";
import Player from "./media/player";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./elements/uielements/controls";
import Home from "./home/home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
