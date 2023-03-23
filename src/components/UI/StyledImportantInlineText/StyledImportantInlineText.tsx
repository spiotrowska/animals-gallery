import { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";

function StyledImportantInlineText(props: TypographyProps) {
  return (
    <Typography
      {...props}
      variant="h5"
      sx={{
        color: "primary.main",
        display: "inline",
        fontWeight: "bold",
        fontSize: { xs: "1.1rem", sm: "1.35rem" },
      }}
    />
  );
}

export default StyledImportantInlineText;
