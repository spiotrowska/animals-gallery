import { Spieces, SpiecesAll, Status } from "../../../types/types";
import { Image } from "../images/types";

export type Favourite = {
  id: string;
  image_id: string;
  image: Image;
  spieces: Spieces;
};

export type FavouritesState = {
  status: Status;
  addNewStatus: Status;
  deleteStatus: Status;
  error: string | null;
  data: Favourite[];
  spieces: SpiecesAll;
};

export type DeleteFavouritesPayload = {
  id: string;
  spieces: Spieces;
};
