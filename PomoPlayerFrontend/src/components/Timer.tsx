import { useEffect, useState } from "react";

const Timer = () => {
  // Might use these later to determin the time by the user's config

  const [time, setTime] = useState(25 * 60); //Default 25 minutes
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
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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

  return <div className="flex flex-col items-center justify-center gap-4"></div>;
};

export default Timer;
