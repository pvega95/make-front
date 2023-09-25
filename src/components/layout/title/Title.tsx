import { ECTitle } from "./styles";
import { Typography } from "@mui/material";

export const Title = () => {
  return (
    <ECTitle>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title Custom
          </Typography>
    </ECTitle>
  );
};
