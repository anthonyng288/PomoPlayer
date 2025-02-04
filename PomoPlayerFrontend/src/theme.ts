import { createTheme } from "@mui/material";

import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
      light: red[500],
      dark: red[900],
      contrastText: "#ffff",
    },
  },
  typography: {
    fontFamily: "Kanit, sans-serif",
  },
});

export default theme;
