import {
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import "./Navbar.css";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const links = (
    <>
      <NavLink to="/" style={{ marginRight: 10 }} onClick={toggleDrawer(false)}>
        Home
      </NavLink>
      <NavLink
        to="/gallery"
        style={{ marginRight: 10 }}
        onClick={toggleDrawer(false)}
      >
        Gallery
      </NavLink>
      <NavLink to="/favourites" onClick={toggleDrawer(false)}>
        Favourites
      </NavLink>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <PetsIcon /> Animals Gallery
            </NavLink>
          </Typography>
          <Hidden only={["xs", "sm"]}>{links}</Hidden>
          <Hidden mdUp>
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
                  <div style={{ flexGrow: 1 }}></div>
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
              <div
                className="menu-content"
                style={{
                  background: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              >
                {links}
              </div>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default Navbar;
