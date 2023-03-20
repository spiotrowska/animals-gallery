import { Image } from "../images/types";

export type Favourite = {
  id: string;
  image_id: string;
  // image: {
  //   id: string;
  //   url: string;
  // };
  image: Image;
  spieces: "dog" | "cat";
};

export type FavouritesState = {
  status: "loading" | "idle" | "fulfilled" | "rejected";
  error: string | null;
  data: Favourite[];
};

export type DeleteFavouritesPayload = {
  id: string;
  spieces: "dog" | "cat";
};
