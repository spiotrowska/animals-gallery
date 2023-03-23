import { Backdrop } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBackdrop = styled(Backdrop)(
  ({ theme }) => `
  background-color: rgb(0 0 0 / 90%);
  z-index: ${theme.zIndex.drawer + 1};
`
);

export default StyledBackdrop;
