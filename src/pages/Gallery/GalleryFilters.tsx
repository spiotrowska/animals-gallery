import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  selectShowPagination,
  setShowPagination,
  setSpieces,
} from "../../store/features/images/imagesSlice";
import { SpiecesAll } from "../../types/types";
import StyledFilterButton from "./../../components/UI/StyledFilterButton/StyledFilterButton";
import { selectImagesSpieces } from "./../../store/features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";

function GalleryFilters() {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const spieces = useAppSelector(selectImagesSpieces);
  const showPagination = useAppSelector(selectShowPagination);

  function isSelectedSpieces(selectedSpieces: SpiecesAll): boolean {
    return selectedSpieces === spieces;
  }

  function switchPagination() {
    dispatch(setShowPagination(!showPagination));
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <StyledFilterButton
          onClick={() => dispatch(setSpieces("cat"))}
          disabled={isSelectedSpieces("cat")}
        >
          Cats
        </StyledFilterButton>
        <StyledFilterButton
          onClick={() => dispatch(setSpieces("dog"))}
          disabled={isSelectedSpieces("dog")}
        >
          Dogs
        </StyledFilterButton>
        <StyledFilterButton
          onClick={() => dispatch(setSpieces("all"))}
          disabled={isSelectedSpieces("all")}
        >
          All
        </StyledFilterButton>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={6}
        justifyContent={matchDownSm ? "flex-start" : "flex-end"}
      >
        <StyledFilterButton onClick={switchPagination}>
          {showPagination
            ? "Switch to infinity scroll"
            : "Switch to pagination"}
        </StyledFilterButton>
      </Grid>
    </Grid>
  );
}

export default GalleryFilters;
