import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { DeleteFavouritesPayload } from "../../store/features/favourites/types";
import { Image } from "../../store/features/images/types";
import { useAppSelector } from "../../store/hooks";
import ImageBoxInfoButton from "../ImageBoxInfoButton/ImageBoxInfoButton";
import ImageFullScreenButton from "../ImageFullScreenButton/ImageFullScreenButton";
import { addFavourite } from "./../../store/features/favourites/addFavourite";
import { deleteFavourite } from "./../../store/features/favourites/deleteFavourite";
import {
  selectAddNewFavouriteStatus,
  selectDeleteFavouriteStatus,
  selectFavourites,
} from "./../../store/features/favourites/favouritesSlice";
import { useAppDispatch } from "./../../store/hooks";

interface Props {
  image: Image;
}

export default function ImageBox(props: Props) {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(selectFavourites);
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((fav) => fav.image_id === props.image.id)
  );
  const addNewFavouritesStatus = useAppSelector(selectAddNewFavouriteStatus);
  const deleteFavouritesStatus = useAppSelector(selectDeleteFavouriteStatus);

  useEffect(() => {
    if (
      addNewFavouritesStatus === "rejected" ||
      deleteFavouritesStatus === "rejected"
    )
      setIsFavourite(favourites.some((fav) => fav.image_id === props.image.id));
  }, [
    addNewFavouritesStatus,
    deleteFavouritesStatus,
    favourites,
    props.image.id,
  ]);

  function handleSetFavourite() {
    if (isFavourite) {
      setIsFavourite(false);
      const favourite = favourites.find(
        (fav) => fav.image_id === props.image.id
      );
      if (favourite) {
        const deletePayload: DeleteFavouritesPayload = {
          id: favourite.id,
          spieces: favourite.spieces,
        };
        dispatch(deleteFavourite(deletePayload));
      }
    } else {
      setIsFavourite(true);
      dispatch(addFavourite(props.image));
    }
  }

  return (
    <>
      <ImageListItem key={props.image.id} style={{ color: "red" }}>
        <IconButton
          color="primary"
          aria-label="add to favourites"
          style={{ position: "absolute" }}
          onClick={handleSetFavourite}
        >
          {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <img
          src={props.image.url}
          srcSet={props.image.url}
          alt={props.image.id}
          loading="lazy"
        />
        <ImageListItemBar
          title={props.image.breeds && props.image.breeds[0]?.name}
          style={{
            background: "linear-gradient(0deg,rgba(0,0,0,0.9) 0,rgba(0,0,0,0))",
          }}
          actionIcon={
            <>
              {props.image.breeds && (
                <ImageBoxInfoButton
                  name={props.image.breeds[0]?.name}
                  description={props.image.breeds[0]?.description}
                  temperament={props.image.breeds[0]?.temperament}
                  origin={props.image.breeds[0]?.origin}
                />
              )}
              <ImageFullScreenButton imageUrl={props.image.url} />
            </>
          }
        />
      </ImageListItem>
    </>
  );
}
