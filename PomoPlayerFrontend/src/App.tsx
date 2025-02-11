import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import FocusReflection from "./components/FocusReflection";
import Timer from "./components/Timer";
import theme from "./theme";

function App() {
  const [reflection, setReflection] = useState(false);

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
        {reflection ? <FocusReflection /> : <Timer />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
