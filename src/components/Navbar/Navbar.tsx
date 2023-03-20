import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Animals Gallery</NavLink>
          </Typography>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default Navbar;
