import { Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CreateTimeInput from "./CreateTimeInput";
import TimeTextComponent from "./TimeTextComponent";
import TimerButtons from "./TimerButtons";

const Timer = () => {
  // Might use these later to determine the time by the user's config
  // I might have to eventually move the red box to the root, so that I can switch to the focus reflection
  //For now I can keep it here till I figure out the settings of the box in it's current form

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
        padding: 1,
        bgcolor: theme.palette.primary.main,
        borderRadius: 1,
        height: "auto",
        width: "auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TimeTextComponent time={time} />
      <TimerButtons
        isRunning={isRunning}
        onStartPause={handleStartPause}
        onReset={handleReset}
      />

      {/* Don't need this right now */}
      <CreateTimeInput
        customMinutes={customMinutes}
        setCustomMinutes={setCustomMinutes}
        onSetCustomTime={handleCustomTime}
      />
    </Stack>
  );
};

export default Timer;
