import { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";

function StyledImportantText(props: TypographyProps) {
  return (
    <Typography
      {...props}
      variant="h4"
      sx={{
        color: "primary.main",
        m: "20px auto",
        fontWeight: "bold",
        fontSize: { xs: "1.2rem", sm: "1.5rem" },
      }}
    />
  );
}

export default StyledImportantText;
