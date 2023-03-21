import Backdrop from "@mui/material/Backdrop";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { useState } from "react";
import { IconButton } from "@mui/material";

type Props = {
  imageUrl: string;
};

function ImageFullScreen(props: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="full screen"
        onClick={handleOpen}
        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
      >
        <FullscreenIcon />
      </IconButton>
      <Backdrop
        sx={{
          backgroundColor: "rgb(0 0 0 / 80%)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <img
          src={props.imageUrl}
          srcSet={props.imageUrl}
          alt="full screen"
          loading="lazy"
          style={{ width: "auto", height: "90%" }}
        />
      </Backdrop>
    </>
  );
}

export default ImageFullScreen;
