import { Stack, useTheme } from "@mui/material";
import ReflectionButton from "./ReflectionButton";

const FocusReflection = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        padding: 1,
        bgcolor: theme.palette.primary.main,
        borderRadius: 1,
        height: "auto",
        width: "auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReflectionButton focusLevel="Flow" />
      <ReflectionButton focusLevel="Focused" />
      <ReflectionButton focusLevel="Okay" />
      <ReflectionButton focusLevel="Distracted" />
    </Stack>
  );
};

export default FocusReflection;
