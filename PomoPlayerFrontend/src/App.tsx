import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Timer from "./components/Timer";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Timer />
    </ThemeProvider>
  );
}

export default App;
