import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

type RangeSliderProps = React.ComponentProps<typeof Slider>;

const RangeSlider = ({ className, ...props }: RangeSliderProps) => {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
};

export default RangeSlider;
