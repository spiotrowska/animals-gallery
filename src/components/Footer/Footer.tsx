import { Grid, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: 64, color: theme.palette.primary.contrastText }}
    >
      <Grid item xs={12} md={8} textAlign="center">
        <Typography variant="caption">
          <span>&#174;</span> Created by Sylwia Wochniak. Follow me on social
          media:{" "}
          <IconButton
            component={Link}
            to="https://www.linkedin.com/in/sylwia-wochniak-144367144/"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component={Link}
            to="https://github.com/spiotrowska"
            target="_blank"
            color="primary"
          >
            <GitHubIcon />
          </IconButton>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
