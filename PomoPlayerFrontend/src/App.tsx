import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Timer from "./components/Timer";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "100vw",
        }}
      >
        <Timer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
