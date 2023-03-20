import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Image } from "../../store/features/images/types";
import { useAppSelector } from "../../store/hooks";
import ImageBoxInfoButton from "../ImageBoxInfoButton/ImageBoxInfoButton";
import { addFavourite } from "./../../store/features/favourites/addFavourite";
import { selectFavourites } from "./../../store/features/favourites/favouritesSlice";
import { useAppDispatch } from "./../../store/hooks";
import { deleteFavourite } from "./../../store/features/favourites/deleteFavourite";
import { DeleteFavouritesPayload } from "../../store/features/favourites/types";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ImageFullScreen from "../ImageFullScreen/ImageFullScreen";

interface Props {
  image: Image;
}

export default function ImageBox(props: Props) {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(selectFavourites);
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((fav) => fav.image_id === props.image.id)
  );
  const [fullScreenOpen, setFullScreenOpen] = useState(false);

  const handleOpenFullScreen = () => {
    setFullScreenOpen(true);
  };

  const handleCloseFullScreen = () => {
    setFullScreenOpen(false);
  };

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
      <ImageListItem key={props.image.id}>
        <IconButton
          color="error"
          aria-label="add to favourites"
          style={{ position: "absolute" }}
          onClick={handleSetFavourite}
        >
          {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton
          aria-label="full screen"
          style={{ position: "absolute", right: 0 }}
          onClick={handleOpenFullScreen}
        >
          <FullscreenIcon />
        </IconButton>
        <img
          src={`${props.image.url}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${props.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={props.image.id}
          loading="lazy"
        />
        {props.image.breeds && (
          <ImageListItemBar
            title={props.image.breeds[0]?.name}
            subtitle={props.image.breeds[0]?.description}
            actionIcon={
              <ImageBoxInfoButton
                name={props.image.breeds[0]?.name}
                description={props.image.breeds[0]?.description}
                temperament={props.image.breeds[0]?.temperament}
                origin={props.image.breeds[0]?.origin}
              />
            }
          />
        )}
      </ImageListItem>
      <ImageFullScreen
        imageUrl={props.image.url}
        open={fullScreenOpen}
        handleClose={handleCloseFullScreen}
      />
    </>
  );
}
