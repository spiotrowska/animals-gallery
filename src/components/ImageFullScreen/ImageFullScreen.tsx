import Backdrop from "@mui/material/Backdrop";

type Props = {
  imageUrl: string;
  open: boolean;
  handleClose: () => void;
};

function ImageFullScreen(props: Props) {
  return (
    <Backdrop
      sx={{
        backgroundColor: "rgb(0 0 0 / 80%)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={props.open}
      onClick={props.handleClose}
    >
      <img
        src={props.imageUrl}
        srcSet={props.imageUrl}
        alt="full screen"
        loading="lazy"
        style={{ width: "auto", height: "90%" }}
      />
    </Backdrop>
  );
}

export default ImageFullScreen;
