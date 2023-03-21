import { Button, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Grid item xs={12} md={10} lg={6} textAlign="center">
        <Typography>
          {/* <Avatar
            src="https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/32t.gif"
            alt="animal gif"
            sx={{
              width: 200,
              height: 200,
              margin: "auto",
              border: `10px solid ${theme.palette.primary.contrastText}`,
            }}
          /> */}
          <div className="dog-head">
            <img
              src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png"
              alt="animation"
            />
          </div>
          <h3>
            The world's largest and most trusted photo collection of dogs, cats
            and more! Discover over 1000 new animals today!
          </h3>
          <Link to="/gallery">
            <Button variant="contained">Go to gallery</Button>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
