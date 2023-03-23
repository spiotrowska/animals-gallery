import { Button, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import StyledCarouselImage from "../../components/UI/StyledCarouselImage/StyledCarouselImage";
import StyledHomeTextBox from "../../components/UI/StyledHomeTextBox/StyledHomeTextBox";
import StyledImportantInlineText from "../../components/UI/StyledImportantInlineText/StyledImportantInlineText";
import StyledImportantText from "../../components/UI/StyledImportantText/StyledImportantText";
import useResponsiveCarouselHeight from "./../../hooks/useResponsiveCarouselHeight";

function Home() {
  const imageUrls = [
    "https://cdn2.thedogapi.com/images/qBYpfkZr1.jpg",
    "https://cdn2.thecatapi.com/images/ji-5E0VwY.jpg",
    "https://cdn2.thedogapi.com/images/yh3ZWqyEM.jpg",
    "https://cdn2.thecatapi.com/images/d_RzH-Zft.jpg",
    "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg",
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid item xs={12} md={6}>
        <Carousel
          animation="slide"
          duration={1000}
          height={useResponsiveCarouselHeight()}
          navButtonsAlwaysVisible
          indicators={false}
        >
          {imageUrls.map((img, index) => (
            <StyledCarouselImage
              key={index}
              src={img}
              srcSet={img}
              alt={"animal" + index}
              loading="lazy"
            />
          ))}
        </Carousel>
      </Grid>
      <StyledHomeTextBox item xs={12} md={6}>
        The world's largest and most trusted photo collection of dogs, cats and
        more! Discover over{" "}
        <StyledImportantInlineText>1000</StyledImportantInlineText> new animals
        today!
        <br />
        <StyledImportantInlineText>An animal</StyledImportantInlineText> is a
        particular kind of living organism, one that can move voluntarily and
        can find and digest food.
        <StyledImportantText>See and love them!</StyledImportantText>
        <Button variant="contained" component={Link} to="/gallery">
          Go to gallery
        </Button>
      </StyledHomeTextBox>
    </Grid>
  );
}

export default Home;
