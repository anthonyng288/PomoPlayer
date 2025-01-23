import { Slider } from "./RangeSlider";

const Settings = () => {
  return (
    <div className="text-left">
      <label>Work Minutes:</label>
      <Slider defaultValue={[33]} max={100} step={1} />

      <label>Break Minutes</label>
    </div>
  );
};

export default Settings;
