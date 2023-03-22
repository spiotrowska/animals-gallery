import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import {
  catsAxiosInstance,
  dogsAxiosInstance,
} from "../../../utils/axios-client";
import { Image } from "../images/types";
import { Favourite } from "./types";

export const addFavourite = createAsyncThunk<
  Favourite,
  Image,
  { rejectValue: string }
>("favourites/add", async (payload, thunkApi) => {
  const url = "favourites";
  try {
    let axiosInstance: AxiosInstance;
    if (payload.spieces === "dog") {
      axiosInstance = dogsAxiosInstance;
    } else {
      axiosInstance = catsAxiosInstance;
    }
    const response = await axiosInstance.post(url, {
      image_id: payload.id,
    });
    const favourite: Favourite = {
      id: response.data.id,
      image_id: payload.id,
      image: {
        id: payload.id,
        url: payload.url,
        spieces: payload.spieces,
      },
      spieces: payload.spieces,
    };
    return favourite;
  } catch (err: any) {
    const errorMessage = err.response.data?.message || err.response.data;
    return thunkApi.rejectWithValue(errorMessage);
  }
});
