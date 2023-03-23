import { Grid } from "@mui/material";
import StyledFilterButton from "../../components/UI/StyledFilterButton/StyledFilterButton";
import { SpiecesAll } from "../../types/types";
import {
  selectFavouritesSpieces,
  setFavouritesSpieces,
} from "./../../store/features/favourites/favouritesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";

function FavouritesFilters() {
  const dispatch = useAppDispatch();
  const spieces = useAppSelector(selectFavouritesSpieces);

  function isSelectedSpieces(selectedSpieces: SpiecesAll): boolean {
    return selectedSpieces === spieces;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledFilterButton
          onClick={() => dispatch(setFavouritesSpieces("cat"))}
          disabled={isSelectedSpieces("cat")}
        >
          Cats
        </StyledFilterButton>
        <StyledFilterButton
          onClick={() => dispatch(setFavouritesSpieces("dog"))}
          disabled={isSelectedSpieces("dog")}
        >
          Dogs
        </StyledFilterButton>
        <StyledFilterButton
          onClick={() => dispatch(setFavouritesSpieces("all"))}
          disabled={isSelectedSpieces("all")}
        >
          All
        </StyledFilterButton>
      </Grid>
    </Grid>
  );
}

export default FavouritesFilters;
