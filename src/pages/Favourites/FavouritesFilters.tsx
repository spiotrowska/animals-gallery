import { Button, Grid } from "@mui/material";
import {
  selectFavouritesSpieces,
  setFavouritesSpieces,
} from "./../../store/features/favourites/favouritesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";

function FavouritesFilters() {
  const dispatch = useAppDispatch();
  const spieces = useAppSelector(selectFavouritesSpieces);

  function isSelectedSpieces(selectedSpieces: "dog" | "cat" | "all"): boolean {
    return selectedSpieces === spieces;
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={() => dispatch(setFavouritesSpieces("cat"))}
          disabled={isSelectedSpieces("cat")}
          style={{ marginRight: 10 }}
        >
          Cats
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(setFavouritesSpieces("dog"))}
          disabled={isSelectedSpieces("dog")}
          style={{ marginRight: 10 }}
        >
          Dogs
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(setFavouritesSpieces("all"))}
          disabled={isSelectedSpieces("all")}
        >
          All
        </Button>
      </Grid>
    </Grid>
  );
}

export default FavouritesFilters;
