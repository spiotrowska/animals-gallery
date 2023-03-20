import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchFavourites } from "./fetchFavourites";
import { FavouritesState } from "./types";
import { addFavourite } from "./addFavourite";
import { deleteFavourite } from "./deleteFavourite";

const initialState: FavouritesState = {
  status: "idle",
  error: null,
  data: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavourites.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchFavourites.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchFavourites.rejected, (state, { payload }) => {
      //   if (payload) state.error = payload.message;
      console.log("payload", payload);
      state.status = "rejected";
    });
    builder.addCase(addFavourite.fulfilled, (state, { payload }) => {
      state.data = [...state.data, payload];
    });
    builder.addCase(deleteFavourite.fulfilled, (state, { payload }) => {
      state.data = state.data.filter((fav) => fav.id !== payload);
    });
  },
});

export const selectFavouritesStatus = (state: RootState) =>
  state.favourites.status;
export const selectFavourites = (state: RootState) => state.favourites.data;

export default favouritesSlice.reducer;
