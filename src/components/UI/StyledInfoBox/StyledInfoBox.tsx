import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(
  ({ theme }) => `
  text-align: center;
  color: ${theme.palette.primary.contrastText};
  margin-top: 10px;
`
);

function StyledInfoBox(props: { children: string }) {
  return <StyledTypography variant="h6">{props.children}</StyledTypography>;
}

export default StyledInfoBox;
