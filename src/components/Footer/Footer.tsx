import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StyledFooterGridBox from "../UI/StyledFooterGridBox/StyledFooterGridBox";

function Footer() {
  return (
    <StyledFooterGridBox
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
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
    </StyledFooterGridBox>
  );
}

export default Footer;
