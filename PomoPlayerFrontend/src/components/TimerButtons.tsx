import { Box, Button, useTheme } from "@mui/material";

type TimerControlsProps = {
  isRunning: boolean;
  onStartPause: () => void;
  onReset: () => void;
};

const TimerButtons = ({
  isRunning,
  onStartPause,
  onReset,
}: TimerControlsProps) => {
  const theme = useTheme();

  return (
    <Box
      className="timerButtons"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.light,
          height: "30px",
          width: "40px",
        }}
        onClick={onStartPause}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.light,
          ml: 2,
          height: "30px",
          width: "40px",
        }}
        onClick={onReset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default TimerButtons;
