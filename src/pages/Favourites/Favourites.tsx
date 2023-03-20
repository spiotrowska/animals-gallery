import { CircularProgress, ImageList } from "@mui/material";
import {
  selectFavourites,
  selectFavouritesStatus,
} from "../../store/features/favourites/favouritesSlice";
import { useAppSelector } from "../../store/hooks";
import ImageBox from "./../../components/ImageBox/ImageBox";

function Favourites() {
  const favouritesStatus = useAppSelector(selectFavouritesStatus);
  const favourites = useAppSelector(selectFavourites);

  return (
    <div>
      <h1>Favourites</h1>
      {favouritesStatus === "loading" && (
        <div className="text-align-center">
          <CircularProgress />
        </div>
      )}
      {favouritesStatus === "fulfilled" &&
        (!favourites?.length ? (
          <p className="text-align-center">No data :(</p>
        ) : (
          <ImageList cols={5}>
            {favourites.map((fav) => (
              <ImageBox key={fav.id} image={fav.image} />
            ))}
          </ImageList>
        ))}
    </div>
  );
}

export default Favourites;
