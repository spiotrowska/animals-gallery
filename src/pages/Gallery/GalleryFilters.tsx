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
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Button
          variant="contained"
          onClick={() => dispatch(setSpieces("cat"))}
          disabled={isSelectedSpieces("cat")}
        >
          Cats
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(setSpieces("dog"))}
          disabled={isSelectedSpieces("dog")}
        >
          Dogs
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(setSpieces("all"))}
          disabled={isSelectedSpieces("all")}
        >
          All
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button onClick={switchPagination}>
          {showPagination ? "Infinity scroll" : "Pagination"}
        </Button>
        {showPagination && <GalleryPagination />}
      </Grid>
    </Grid>
  );
}

export default GalleryFilters;
