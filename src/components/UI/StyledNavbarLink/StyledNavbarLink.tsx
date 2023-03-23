import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const StyledNavbarLink = styled(NavLink)`
  margin-right: 10px;
  color: inherit;
  text-decoration: none;

  :hover {
    color: white;
  }
`;

export default StyledNavbarLink;
