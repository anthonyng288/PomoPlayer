import { Slider } from "@/components/ui/slider";

const Settings = () => {
  return (
    <div className="text-left">
      <label>Work Minutes:</label>
      <label>Break Minutes</label>

      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
};

export default Settings;
