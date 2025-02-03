import { useEffect, useState } from "react";

const Timer = () => {
  // Might use these later to determine the time by the user's config

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
    <div>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={handleStartPause}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div>
        <input
          type="number"
          min="1"
          value={customMinutes}
          onChange={(e) => {
            setCustomMinutes(e.target.value);
          }}
        ></input>
        <button onClick={handleCustomTime}>Set</button>
      </div>
    </div>
  );
};

export default Timer;
