import InfoIcon from "@mui/icons-material/Info";
import { Tooltip, Typography } from "@mui/material";
import StyledImageBoxButton from "../UI/StyledImageBoxButton/StyledImageBoxButton";
import StyledImageBoxInfoTitleText from "../UI/StyledImageBoxInfoText/StyledImageBoxInfoTitleText";
import StyledImageBoxInfoTitle from "../UI/StyledImageBoxInfoTitle/StyledImageBoxInfoTitle";

interface Props {
  name: string;
  description: string;
  temperament: string;
  origin: string;
}

export default function ImageBoxInfoButton(props: Props) {
  return (
    <StyledImageBoxButton aria-label={`info about ${props.name}`}>
      <Tooltip
        enterTouchDelay={0}
        title={
          <Typography component={"span"}>
            <StyledImageBoxInfoTitle>{props.name}</StyledImageBoxInfoTitle>
            {props.description && (
              <StyledImageBoxInfoTitleText>
                {props.description}
              </StyledImageBoxInfoTitleText>
            )}
            {props.temperament && (
              <StyledImageBoxInfoTitleText>
                {`Temperament: ${props.temperament}`}
              </StyledImageBoxInfoTitleText>
            )}
            {props.origin && (
              <StyledImageBoxInfoTitleText>
                {`From: ${props.origin}`}
              </StyledImageBoxInfoTitleText>
            )}
          </Typography>
        }
      >
        <InfoIcon />
      </Tooltip>
    </StyledImageBoxButton>
  );
}
