import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import StyledSnackbar from "../UI/StyledSnackbar/StyledSnackbar";
import {
  selectAddNewFavouriteStatus,
  selectDeleteFavouriteStatus,
  selectFavouritesError,
  selectFavouritesStatus,
} from "./../../store/features/favourites/favouritesSlice";
import {
  selectImagesError,
  selectImagesStatus,
} from "./../../store/features/images/imagesSlice";

type TransitionProps = Omit<SlideProps, "direction">;
const slideTransition = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />;
};

function ErrorNotification() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const imagesStatus = useAppSelector(selectImagesStatus);
  const imagesError = useAppSelector(selectImagesError);
  const favouritesStatus = useAppSelector(selectFavouritesStatus);
  const favouritesError = useAppSelector(selectFavouritesError);
  const addNewFavouritesStatus = useAppSelector(selectAddNewFavouriteStatus);
  const deleteFavouritesStatus = useAppSelector(selectDeleteFavouriteStatus);

  useEffect(() => {
    const errorMessage = "Ups! Something went wrong.";
    if (imagesStatus === "rejected") {
      console.log(imagesError);
      setMessage(errorMessage);
      setOpen(true);
    }
  }, [imagesStatus, imagesError]);

  useEffect(() => {
    const errorMessage = "Ups! Something went wrong.";
    if (
      favouritesStatus === "rejected" ||
      addNewFavouritesStatus === "rejected" ||
      deleteFavouritesStatus === "rejected"
    ) {
      console.log(favouritesError);
      setMessage(errorMessage);
      setOpen(true);
    }
  }, [
    favouritesStatus,
    favouritesError,
    addNewFavouritesStatus,
    deleteFavouritesStatus,
  ]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      message={message}
      autoHideDuration={3000}
      TransitionComponent={slideTransition}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}

export default ErrorNotification;
