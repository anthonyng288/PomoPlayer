import { Button } from "@mui/material";

const ReflectionButton = ({ focusLevel }: { focusLevel: string }) => {
  // TODO - Needs hardcoded widith

  return (
    <Button
      sx={{ bgcolor: "white", color: "black", margin: "10px" }}
      variant="contained"
      size="large"
    >
      {focusLevel}
    </Button>
  );
};

export default ReflectionButton;
