import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { SpiecesAll } from "../../../types/types";
import {
  catsAxiosInstance,
  dogsAxiosInstance,
} from "../../../utils/axios-client";
import { FetchImagesPayload, Image } from "./types";

function getRowsPerPage(spieces: SpiecesAll, rowsPerPage: number): number {
  return spieces === "all" ? rowsPerPage / 2 : rowsPerPage;
}

export const fetchImages = createAsyncThunk<
  { data: Image[]; totalCount: number },
  FetchImagesPayload,
  { rejectValue: string }
>("images/fetch", async (payload, thunkApi) => {
  const url = "images/search";
  const params: AxiosRequestConfig = {
    params: {
      page: payload.page,
      limit: getRowsPerPage(payload.spieces, payload.rowsPerPage),
      has_breeds: true,
      include_favourite: true,
    },
  };

  try {
    switch (payload.spieces) {
      case "dog":
        const dogsResponse = await dogsAxiosInstance.get(url, params);
        const dogsTocalCount: number = dogsResponse.headers["pagination-count"];
        return { data: dogsResponse.data, totalCount: dogsTocalCount };
      case "cat":
        const catsResponse = await catsAxiosInstance.get(url, params);
        const catsTocalCount: number = catsResponse.headers["pagination-count"];
        return { data: catsResponse.data, totalCount: catsTocalCount };
      case "all":
      default:
        const [catsResp, dogsResp] = await Promise.all([
          catsAxiosInstance.get(url, params),
          dogsAxiosInstance.get(url, params),
        ]);

        const catsImages: Image[] = catsResp?.data.map((catImg: Image) => ({
          ...catImg,
          spieces: "cat",
        }));
        const dogsImages: Image[] = dogsResp?.data.map((dogImg: Image) => ({
          ...dogImg,
          spieces: "dog",
        }));

        const data: Image[] = catsImages
          .map((catImg: Image, index: number) => [catImg, dogsImages[index]])
          .flat();

        const totalCount: number =
          Number(catsResp.headers["pagination-count"]) +
          Number(dogsResp.headers["pagination-count"]);

        return { data: data, totalCount: totalCount };
    }
  } catch (err: any) {
    const errorMessage = err.response.data?.message || err.response.data;
    return thunkApi.rejectWithValue(errorMessage);
  }
});
