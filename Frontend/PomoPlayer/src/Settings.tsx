import RangeSlider from "./RangeSlider";

const Settings = () => {
  return (
    <div className="text-left">
      <label>Work Minutes:</label>
      <RangeSlider />
      <label>Break Minutes</label>
    </div>
  );
};

export default Settings;
