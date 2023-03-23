import { CircularProgress, Grid, ImageList, Typography } from "@mui/material";
import StyledInfoBox from "../../components/UI/StyledInfoBox/StyledInfoBox";
import {
  selectFavourites,
  selectFavouritesStatus,
} from "../../store/features/favourites/favouritesSlice";
import { useAppSelector } from "../../store/hooks";
import ImageBox from "./../../components/ImageBox/ImageBox";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";
import FavouritesFilters from "./FavouritesFilters";

function Favourites() {
  const favouritesStatus = useAppSelector(selectFavouritesStatus);
  const favourites = useAppSelector(selectFavourites);
  const imageCols = useResponsiveImageCols();

  return (
    <Grid textAlign="center">
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Favourite animals
        </Typography>
      </Grid>
      {favouritesStatus === "loading" && (
        <Grid textAlign="center">
          <CircularProgress />
        </Grid>
      )}
      {favouritesStatus === "rejected" && (
        <StyledInfoBox>
          Something went wrong :( You need to refresh the page.
        </StyledInfoBox>
      )}
      {favouritesStatus === "fulfilled" &&
        (!favourites?.length ? (
          <StyledInfoBox>No data :(</StyledInfoBox>
        ) : (
          <>
            <FavouritesFilters />
            <ImageList cols={imageCols}>
              {favourites.map((fav) => (
                <ImageBox key={fav.id} image={fav.image} />
              ))}
            </ImageList>
          </>
        ))}
    </Grid>
  );
}

export default Favourites;
