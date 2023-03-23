import { GridProps } from "@mui/material";
import Grid from "@mui/material/Grid";

function StyledHomeTextBox(props: GridProps) {
  return (
    <Grid
      {...props}
      sx={{
        typography: "h6",
        px: 5,
        fontSize: { xs: "1rem", sm: "1.25rem" },
      }}
    />
  );
}

export default StyledHomeTextBox;
