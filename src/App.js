import React from "react";
import Search from "./elements/search/search";
import Player from "./media/player";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./elements/uielements/controls";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Search /> */}
      <Player />
    </ThemeProvider>
  );
}

export default App;
