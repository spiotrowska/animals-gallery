import { AppBar, Box, Hidden, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import StyledNavbarLink from "../UI/StyledNavbarLink/StyledNavbarLink";
import NavbarLinkItems from "./NavbarLinkItems";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledNavbarLink to="/">Animals Gallery</StyledNavbarLink>
          </Typography>
          <Hidden only={["xs", "sm"]}>
            <NavbarLinkItems />
          </Hidden>
          <Hidden mdUp>
            <NavbarMobile />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default Navbar;
