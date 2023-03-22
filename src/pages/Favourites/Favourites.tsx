import { CircularProgress, ImageList, Typography } from "@mui/material";
import {
  selectFavourites,
  selectFavouritesStatus,
} from "../../store/features/favourites/favouritesSlice";
import { useAppSelector } from "../../store/hooks";
import ImageBox from "./../../components/ImageBox/ImageBox";
import NoDataBox from "./../../components/NoDataBox/NoDataBox";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";
import FavouritesFilters from "./FavouritesFilters";

function Favourites() {
  const favouritesStatus = useAppSelector(selectFavouritesStatus);
  const favourites = useAppSelector(selectFavourites);
  const imageCols = useResponsiveImageCols();

  return (
    <div>
      <Typography variant="h4">Favourites animals</Typography>
      <FavouritesFilters />
      {favouritesStatus === "loading" && (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      )}
      {favouritesStatus === "rejected" && <NoDataBox />}
      {favouritesStatus === "fulfilled" &&
        (!favourites?.length ? (
          <p className="text-align-center">No data :(</p>
        ) : (
          <ImageList cols={imageCols}>
            {favourites.map((fav) => (
              <ImageBox key={fav.id} image={fav.image} />
            ))}
          </ImageList>
        ))}
    </div>
  );
}

export default Favourites;
