import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  max-height: 37px;
  margin-right: 5px;
  margin-left: 5px;
`;

function StyledFilterButton(props: ButtonProps) {
  return <StyledButton {...props} variant="outlined" />;
}

export default StyledFilterButton;
