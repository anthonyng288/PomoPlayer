import { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(0);
  const MAX = 10;
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };

  return (
    <>
      <input
        id="default-range"
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
        style={getBackgroundSize()}
        value={value}
      ></input>
    </>
  );
};

export default RangeSlider;
