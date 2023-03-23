import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { Tooltip, Button } from "@mui/material";
import { useState } from "react";
import StyledBackdrop from "../UI/StyledBackdrop/StyledBackdrop";
import StyledImageBoxButton from "../UI/StyledImageBoxButton/StyledImageBoxButton";
import StyledImageFullScreen from "../UI/StyledImageFullScreen/StyledImageFullScreen";
import CloseIcon from "@mui/icons-material/Close";

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
      <StyledImageBoxButton aria-label="full screen" onClick={handleOpen}>
        <Tooltip title="Full screen">
          <FullscreenIcon />
        </Tooltip>
      </StyledImageBoxButton>
      <StyledBackdrop open={open} onClick={handleClose}>
        <Button
          variant="contained"
          color="primary"
          aria-label="close"
          sx={{ position: "absolute", right: 0, top: 0 }}
        >
          <CloseIcon />
        </Button>
        <StyledImageFullScreen
          src={props.imageUrl}
          srcSet={props.imageUrl}
          alt="full screen"
          loading="lazy"
        />
      </StyledBackdrop>
    </>
  );
}

export default ImageFullScreen;
