import { CircularProgress, ImageList } from "@mui/material";
import {
  selectFavourites,
  selectFavouritesStatus,
} from "../../store/features/favourites/favouritesSlice";
import { useAppSelector } from "../../store/hooks";
import ImageBox from "./../../components/ImageBox/ImageBox";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";

function Favourites() {
  const favouritesStatus = useAppSelector(selectFavouritesStatus);
  const favourites = useAppSelector(selectFavourites);
  const imageCols = useResponsiveImageCols();

  return (
    <div>
      {favouritesStatus === "loading" && (
        <div className="text-align-center">
          <CircularProgress />
        </div>
      )}
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
