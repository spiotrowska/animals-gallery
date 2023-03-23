import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFooterGridBox = styled(Grid)(
  ({ theme }) => `
  height: 64px;
  color: ${theme.palette.primary.contrastText};
  border-top: 1px solid rgb(233 233 233);
`
);

export default StyledFooterGridBox;
