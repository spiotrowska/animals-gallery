import { ImageListItemBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImageListItemBar = styled(ImageListItemBar)`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0));

  & .MuiImageListItemBar-titleWrap {
    max-width: calc(100% - 100px);
  }
`;

export default StyledImageListItemBar;
