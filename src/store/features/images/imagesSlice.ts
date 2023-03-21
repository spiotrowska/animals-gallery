import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ImagesState } from "./types";
import { fetchImages } from "./fetchImages";

const initialState: ImagesState = {
  status: "idle",
  error: null,
  data: [],
  spieces: "all",
  page: 0,
  rowsPerPage: 20,
  totalCount: 0,
  showPagination: false,
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setSpieces: (state, action: PayloadAction<"dog" | "cat" | "all">) => {
      state.status = "idle";
      state.spieces = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.status = "idle";
      state.page = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.status = "idle";
      state.rowsPerPage = action.payload;
    },
    setShowPagination: (state, action: PayloadAction<boolean>) => {
      state.showPagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchImages.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.totalCount = payload.totalCount;
      state.status = "fulfilled";
    });
    builder.addCase(fetchImages.rejected, (state, { payload }) => {
      //   if (payload) state.error = payload.message;
      console.log("payload", payload);
      state.status = "rejected";
    });
  },
});

export const { setSpieces, setPage, setRowsPerPage, setShowPagination } =
  imagesSlice.actions;

export const selectImagesStatus = (state: RootState) => state.images.status;
export const selectImages = (state: RootState) => state.images.data;
export const selectImagesSpieces = (state: RootState) => state.images.spieces;
export const selectImagesPage = (state: RootState) => state.images.page;
export const selectImagesRowsPerPage = (state: RootState) =>
  state.images.rowsPerPage;
export const selectImagesTotalCount = (state: RootState) =>
  state.images.totalCount;
export const selectShowPagination = (state: RootState) =>
  state.images.showPagination;

export default imagesSlice.reducer;
