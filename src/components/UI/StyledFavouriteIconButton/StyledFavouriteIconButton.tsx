import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFavouriteIconButton = styled(IconButton)(
  ({ theme }) => `
  position: absolute;
  color: ${theme.palette.primary.main};
`
);

export default StyledFavouriteIconButton;
