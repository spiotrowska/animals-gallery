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
  spieces: "dog" | "cat";
};

export type FetchImagesPayload = {
  spieces: "dog" | "cat" | "all";
  page: number;
  rowsPerPage: number;
};

export type FetchImagesError = {
  message: string;
};

export type ImagesState = {
  status: "loading" | "idle" | "fulfilled" | "rejected";
  error: string | null;
  data: Image[];
  totalCount: number;
  showPagination: boolean;
} & FetchImagesPayload;
// spieces: "dog" | "cat" | "all";
// page: number;
// rowsPerPage: number;
