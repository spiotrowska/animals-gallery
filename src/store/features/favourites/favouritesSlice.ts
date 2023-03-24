import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpiecesAll } from "../../../types/types";
import { RootState } from "../../store";
import { addFavourite } from "./addFavourite";
import { deleteFavourite } from "./deleteFavourite";
import { fetchFavourites } from "./fetchFavourites";
import { FavouritesState } from "./types";

export const initialState: FavouritesState = {
  status: "idle",
  addNewStatus: "idle",
  deleteStatus: "idle",
  error: null,
  data: [],
  spieces: "all",
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavouritesSpieces: (state, action: PayloadAction<SpiecesAll>) => {
      state.status = "idle";
      state.spieces = action.payload;
    },
  },
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
      if (payload) state.error = payload;
      state.status = "rejected";
    });
    builder.addCase(addFavourite.pending, (state) => {
      state.addNewStatus = "loading";
      state.error = null;
    });
    builder.addCase(addFavourite.fulfilled, (state, { payload }) => {
      if (payload.spieces === state.spieces || state.spieces === "all") {
        state.data = [...state.data, payload];
      }
    });
    builder.addCase(addFavourite.rejected, (state, { payload }) => {
      if (payload && typeof payload === "string") state.error = payload;
      state.addNewStatus = "rejected";
    });
    builder.addCase(deleteFavourite.pending, (state) => {
      state.deleteStatus = "loading";
      state.error = null;
    });
    builder.addCase(deleteFavourite.fulfilled, (state, { payload }) => {
      state.data = state.data.filter((fav) => fav.id !== payload);
    });
    builder.addCase(deleteFavourite.rejected, (state, { payload }) => {
      if (payload && typeof payload === "string") state.error = payload;
      state.deleteStatus = "rejected";
    });
  },
});

export const { setFavouritesSpieces } = favouritesSlice.actions;

export const selectFavouritesStatus = (state: RootState) =>
  state.favourites.status;
export const selectAddNewFavouriteStatus = (state: RootState) =>
  state.favourites.addNewStatus;
export const selectDeleteFavouriteStatus = (state: RootState) =>
  state.favourites.deleteStatus;
export const selectFavouritesError = (state: RootState) =>
  state.favourites.error;
export const selectFavourites = (state: RootState) => state.favourites.data;
export const selectFavouritesSpieces = (state: RootState) =>
  state.favourites.spieces;

export default favouritesSlice.reducer;
