import { Button, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import { selectFavourites } from "../../store/features/favourites/favouritesSlice";
import { useAppSelector } from "../../store/hooks";
import { useTheme } from "@mui/material/styles";
import useResponsiveCarouselHeight from "./../../hooks/useResponsiveCarouselHeight";

function Home() {
  const favourites = useAppSelector(selectFavourites);
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <Grid item xs={12} md={6}>
        <Carousel
          animation="slide"
          duration={1000}
          height={useResponsiveCarouselHeight()}
          navButtonsAlwaysVisible
          indicators={false}
        >
          {favourites.map((fav) => (
            <img
              key={fav.id}
              src={fav.image.url}
              srcSet={fav.image.url}
              alt={fav.image.id}
              loading="lazy"
              style={{ height: "100%", width: "auto" }}
            />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">
          The world's largest and most trusted photo collection of dogs, cats
          and more! Discover over{" "}
          <strong style={{ color: theme.palette.primary.main }}>1000</strong>{" "}
          new animals today!
        </Typography>
        <Typography variant="h6">
          <strong style={{ color: theme.palette.primary.main }}>
            An animal
          </strong>{" "}
          is a particular kind of living organism, one that can move voluntarily
          and can find and digest food.
        </Typography>
        <Typography
          variant="h4"
          style={{ color: theme.palette.primary.main, margin: "20px auto" }}
        >
          See and love them!
        </Typography>
        <Link to="/gallery">
          <Button variant="contained">Go to gallery</Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
