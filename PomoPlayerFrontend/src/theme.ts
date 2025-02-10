import { createTheme } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#B2BAC2",
          "--TextField-brandBorderHoverColor": "#FFFF",
          "--TextField-brandBorderFocusedColor": "#6F7E8C",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--TextField-brandBorderColor)",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
  },
});

export default theme;
