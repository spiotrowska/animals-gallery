import { createAsyncThunk } from "@reduxjs/toolkit";
import { SpiecesAll } from "../../../types/types";
import { dogsAxiosInstance } from "../../../utils/axios-client";
import { catsAxiosInstance } from "./../../../utils/axios-client";
import { Favourite } from "./types";

export const fetchFavourites = createAsyncThunk<
  Favourite[],
  SpiecesAll,
  { rejectValue: string }
>("favourites/fetch", async (spieces, thunkApi) => {
  const url = "favourites";
  try {
    switch (spieces) {
      case "dog":
        const dogsResponse = await dogsAxiosInstance.get(url);
        const dogsFavourites: Favourite[] = dogsResponse?.data.map(
          (dogFav: Favourite) => ({
            ...dogFav,
            spieces: "dog",
          })
        );
        return dogsFavourites;
      case "cat":
        const catsResponse = await catsAxiosInstance.get(url);
        const catsFavourites: Favourite[] = catsResponse?.data.map(
          (catFav: Favourite) => ({
            ...catFav,
            spieces: "cat",
          })
        );
        return catsFavourites;
      case "all":
      default:
        const [catsResp, dogsResp] = await Promise.all([
          catsAxiosInstance.get(url),
          dogsAxiosInstance.get(url),
        ]);
        const catsFavs: Favourite[] = catsResp?.data.map(
          (catFav: Favourite) => ({
            ...catFav,
            spieces: "cat",
          })
        );
        const dogsFavs: Favourite[] = dogsResp?.data.map(
          (dogFav: Favourite) => ({
            ...dogFav,
            spieces: "dog",
          })
        );
        return [...catsFavs, ...dogsFavs];
    }
  } catch (err: any) {
    const errorMessage = err.response.data?.message || err.response.data;
    return thunkApi.rejectWithValue(errorMessage);
  }
});
