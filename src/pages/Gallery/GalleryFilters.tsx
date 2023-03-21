import { Button, Grid } from "@mui/material";
import GalleryPagination from "../../components/Pagination/GalleryPagination";
import {
  selectShowPagination,
  setShowPagination,
  setSpieces,
} from "../../store/features/images/imagesSlice";
import { selectImagesSpieces } from "./../../store/features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";

function GalleryFilters() {
  const dispatch = useAppDispatch();
  const spieces = useAppSelector(selectImagesSpieces);
  const showPagination = useAppSelector(selectShowPagination);

  function isSelectedSpieces(selectedSpieces: "dog" | "cat" | "all"): boolean {
    return selectedSpieces === spieces;
  }

  function switchPagination() {
    dispatch(setShowPagination(!showPagination));
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <Button
          variant="outlined"
          onClick={() => dispatch(setSpieces("cat"))}
          disabled={isSelectedSpieces("cat")}
        >
          Cats
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(setSpieces("dog"))}
          disabled={isSelectedSpieces("dog")}
        >
          Dogs
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(setSpieces("all"))}
          disabled={isSelectedSpieces("all")}
        >
          All
        </Button>
        <Button variant="outlined" onClick={switchPagination}>
          {showPagination ? "Set infinity scroll" : "Set pagination"}
        </Button>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="flex-end" alignItems="center">
        {showPagination && <GalleryPagination />}
      </Grid>
    </Grid>
  );
}

export default GalleryFilters;
