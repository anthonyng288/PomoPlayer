import { Box, Button, Stack, TextField, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const Timer = () => {
  // Might use these later to determine the time by the user's config
  const theme = useTheme();
  const minutes = 30;
  const [time, setTime] = useState(minutes * 60); //Default 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState("25");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      alert("Timer has finished");
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(25 * 60);
  };

  const handleCustomTime = () => {
    const minutes = parseInt(customMinutes, 10);
    if (!isNaN(minutes) && minutes > 0) {
      setTime(minutes * 60);
      setIsRunning(false);
    }
  };

  return (
    <Stack
      sx={{
        padding: 2,
        bgcolor: theme.palette.primary.main,
        borderRadius: 1,
        height: 300,
        width: 500,
      }}
    >
      <h1>{formatTime(time)}</h1>
      <Box className="timerControls">
        <div>
          <Button variant="contained" onClick={handleStartPause}>
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </div>

        <Box>
          <TextField
            id="customMinutesInput"
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.light,
              borderRadius: 3,
              borderColor: "theme.palette.primary.contrastText",
              input: { color: "white" },
            }}
            onChange={(e) => {
              setCustomMinutes(e.target.value);
            }}
          />

          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.light,
              ml: 2,
              height: "40px",
            }}
            onClick={handleCustomTime}
          >
            Set
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Timer;
