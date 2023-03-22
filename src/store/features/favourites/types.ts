import { Image } from "../images/types";

export type Favourite = {
  id: string;
  image_id: string;
  image: Image;
  spieces: "dog" | "cat";
};

export type FavouritesState = {
  status: "loading" | "idle" | "fulfilled" | "rejected";
  addNewStatus: "loading" | "idle" | "fulfilled" | "rejected";
  deleteStatus: "loading" | "idle" | "fulfilled" | "rejected";
  error: string | null;
  data: Favourite[];
  spieces: "dog" | "cat" | "all";
};

export type DeleteFavouritesPayload = {
  id: string;
  spieces: "dog" | "cat";
};
