import { createAsyncThunk } from "@reduxjs/toolkit";
import { dogsAxiosInstance } from "../../../utils/axios-client";
import { catsAxiosInstance } from "./../../../utils/axios-client";
import { Favourite } from "./types";

export const fetchFavourites = createAsyncThunk<
  Favourite[]
  // { rejectValue: FetchFavouritesError }
>("favourites/fetch", async (thunkApi) => {
  const url = "favourites";
  const [catsResp, dogsResp] = await Promise.all([
    catsAxiosInstance.get(url),
    dogsAxiosInstance.get(url),
  ]);
  const catsFavourites: Favourite[] = catsResp?.data.map(
    (catFav: Favourite) => ({
      ...catFav,
      spieces: "cat",
    })
  );
  const dogsFavourites: Favourite[] = dogsResp?.data.map(
    (dogFav: Favourite) => ({
      ...dogFav,
      spieces: "dog",
    })
  );
  return [...catsFavourites, ...dogsFavourites];
});
