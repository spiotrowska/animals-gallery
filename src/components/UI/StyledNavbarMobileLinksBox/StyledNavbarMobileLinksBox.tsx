import { Box, BoxProps } from "@mui/material";

function StyledNavbarMobileLinksBox(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        mt: 13,
        display: "grid",
        typography: "h6",
        padding: 3,
      }}
    />
  );
}

export default StyledNavbarMobileLinksBox;
