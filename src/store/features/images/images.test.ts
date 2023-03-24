import reducer, {
  initialState,
  setPage,
  setRowsPerPage,
  setShowPagination,
  setSpieces,
} from "./imagesSlice";
import { ImagesState } from "./types";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test("should handle set spieces", () => {
  const previousState: ImagesState = { ...initialState, spieces: "all" };

  expect(reducer(previousState, setSpieces("dog"))).toEqual({
    ...initialState,
    spieces: "dog",
    status: "idle",
  });
});

test("should handle set page", () => {
  const previousState: ImagesState = { ...initialState, page: 0 };

  expect(reducer(previousState, setPage(2))).toEqual({
    ...initialState,
    page: 2,
    status: "idle",
  });
});

test("should handle set rows per page", () => {
  const previousState: ImagesState = { ...initialState, rowsPerPage: 40 };

  expect(reducer(previousState, setRowsPerPage(20))).toEqual({
    ...initialState,
    rowsPerPage: 20,
    status: "idle",
  });
});

test("should handle set show pagination", () => {
  const previousState: ImagesState = { ...initialState, showPagination: false };

  expect(reducer(previousState, setShowPagination(true))).toEqual({
    ...initialState,
    showPagination: true,
  });
});
