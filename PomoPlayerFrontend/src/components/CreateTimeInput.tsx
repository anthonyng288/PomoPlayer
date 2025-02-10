import { Box, Button, TextField, useTheme } from "@mui/material";

type CustomTimeInputProps = {
  customMinutes: string;
  setCustomMinutes: (value: string) => void;
  onSetCustomTime: () => void;
};

const CreateTimeInput = ({
  customMinutes,
  setCustomMinutes,
  onSetCustomTime,
}: CustomTimeInputProps) => {
  const theme = useTheme();
  return (
    <Box
      className="customMinutes"
      sx={{ display: "flex", justifyContent: "center", pt: 3 }}
    >
      <TextField
        id="customMinutesInput"
        size="small"
        sx={{
          backgroundColor: "#B2BAC2",
          input: { color: "white" },
          justifyContent: "center",
          borderRadius: 1,
        }}
        value={customMinutes}
        onChange={(e) => {
          setCustomMinutes(e.target.value);
        }}
      />

      <Button
        disableElevation
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.light,
          ml: 2,
          mt: 0.5,
          height: "30px",
          width: "40px",
        }}
        onClick={onSetCustomTime}
      >
        Set
      </Button>
    </Box>
  );
};

export default CreateTimeInput;
