type TimerDisplayProps = {
  time: number;
};

const TimeText: React.FC<TimerDisplayProps> = ({ time }) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return <h1 className="timerText">{formatTime(time)}</h1>;
};

export default TimeText;
