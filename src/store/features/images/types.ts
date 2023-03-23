import { Spieces, SpiecesAll, Status } from "../../../types/types";

type Breed = {
  name: string;
  description: string;
  temperament: string;
  origin: string;
};

export type Image = {
  id: string;
  url: string;
  width?: number;
  height?: number;
  breeds?: Breed[];
  spieces: Spieces;
};

export type FetchImagesPayload = {
  spieces: SpiecesAll;
  page: number;
  rowsPerPage: number;
};

export type ImagesState = {
  status: Status;
  error: string | null;
  data: Image[];
  totalCount: number;
  showPagination: boolean;
} & FetchImagesPayload;
