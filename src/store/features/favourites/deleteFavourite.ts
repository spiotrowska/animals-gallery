import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { dogsAxiosInstance } from "../../../utils/axios-client";
import { catsAxiosInstance } from "./../../../utils/axios-client";
import { DeleteFavouritesPayload } from "./types";

export const deleteFavourite = createAsyncThunk<
  string,
  DeleteFavouritesPayload
  // { rejectValue: FetchImagesError }
>("favourites/delete", async (payload, thunkApi) => {
  const url = `favourites/${payload.id}`;
  let axiosInstance: AxiosInstance;
  if (payload.spieces === "dog") {
    axiosInstance = dogsAxiosInstance;
  } else {
    axiosInstance = catsAxiosInstance;
  }
  await axiosInstance.delete(url);
  return payload.id;
});
