import InfoIcon from "@mui/icons-material/Info";
import { IconButton, Tooltip, Typography } from "@mui/material";

interface Props {
  name: string;
  description: string;
  temperament: string;
  origin: string;
}

export default function ImageBoxInfoButton(props: Props) {
  return (
    <IconButton
      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
      aria-label={`info about ${props.name}`}
    >
      <Tooltip
        enterTouchDelay={0}
        title={
          <Typography component={"span"}>
            <h4 style={{ marginBottom: 0, marginTop: 0 }}>{props.name}</h4>
            {props.description && (
              <small>
                {props.description}
                <br />
              </small>
            )}
            {props.temperament && (
              <small>
                Temperament: {props.temperament}
                <br />
              </small>
            )}
            {props.origin && <small>From: {props.origin}</small>}
          </Typography>
        }
      >
        <InfoIcon />
      </Tooltip>
    </IconButton>
  );
}
