import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import PauseCircleFilledOutlinedIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";


export const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#ff9100',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  export const play = (
    <ThemeProvider theme={theme}>
    <PlayCircleFilledOutlinedIcon
      style={{ fontSize: "3.1rem" }}
      color="secondary"
    />
  </ThemeProvider>
  );
  export const pause = (
    <ThemeProvider theme={theme}>
    <PauseCircleFilledOutlinedIcon
      style={{ fontSize: "3.1rem" }}
      color="secondary"
    />
  </ThemeProvider>
  );
  export const next = <SkipNextIcon color="secondary" style={{ fontSize: "3.1rem" }} />;
  export const prev = (
    <SkipPreviousIcon color="secondary" style={{ fontSize: "3.1rem" }} />
  );
