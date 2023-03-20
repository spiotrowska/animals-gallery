import { IconButton, Popover, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

interface Props {
  name: string;
  description: string;
  temperament: string;
  origin: string;
}

export default function ImageBoxInfoButton(props: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <IconButton
      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
      aria-label={`info about ${props.name}`}
    >
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <InfoIcon />
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          style: { width: "50%" },
        }}
      >
        <Typography component={"span"}>
          <h3>{props.name}</h3>
          <small>{props.description}</small>
          <br />
          <small>Temperament: {props.temperament}</small>
          <br />
          <small>From: {props.origin}</small>
        </Typography>
      </Popover>
    </IconButton>
  );
}
