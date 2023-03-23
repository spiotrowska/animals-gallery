import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Box,
} from "@mui/material";
import { useState } from "react";
import StyledNavbarMobileLinksBox from "../UI/StyledNavbarMobileLinksBox/StyledNavbarMobileLinksBox";
import NavbarLinkItems from "./NavbarLinkItems";

function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <AppBar position="fixed">
          <Toolbar>
            MENU
            <Box sx={{ flexGrow: 1 }}></Box>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <StyledNavbarMobileLinksBox>
          <NavbarLinkItems handleOnClick={toggleDrawer(false)} />
        </StyledNavbarMobileLinksBox>
      </SwipeableDrawer>
    </>
  );
}

export default NavbarMobile;
