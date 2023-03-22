import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Favourites from "./pages/Favourites/Favourites";
import { useEffect } from "react";
import {
  selectFavouritesSpieces,
  selectFavouritesStatus,
} from "./store/features/favourites/favouritesSlice";
import { fetchFavourites } from "./store/features/favourites/fetchFavourites";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const theme = createTheme({
  palette: {
    primary: {
      main: "#073868",
      contrastText: "#B4AFAF",
    },
  },
  typography: {
    fontFamily: `cursive, "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

function App() {
  const dispatch = useAppDispatch();
  const favouritesStatus = useAppSelector(selectFavouritesStatus);
  const favouriteSpieces = useAppSelector(selectFavouritesSpieces);

  useEffect(() => {
    if (favouritesStatus === "idle") {
      dispatch(fetchFavourites(favouriteSpieces));
    }
  }, [dispatch, favouritesStatus, favouriteSpieces]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Suspense fallback={<h3>Waiting</h3>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
