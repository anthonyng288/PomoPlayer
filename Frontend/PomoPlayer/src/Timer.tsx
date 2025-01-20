import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";

const Timer = () => {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#f54e4e",
          trailColor: "rgba(255,255,255,0.2)",
        })}
      />
      <div className="mt-5">
        <PlayButton />
        <PauseButton />
      </div>
      <div className="mt-5">
        <SettingsButton />
      </div>
    </div>
  );
};

export default Timer;
