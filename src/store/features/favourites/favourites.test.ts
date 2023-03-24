import reducer, { initialState, setFavouritesSpieces } from "./favouritesSlice";
import { FavouritesState } from "./types";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test("should handle set spieces", () => {
  const previousState: FavouritesState = { ...initialState, spieces: "all" };

  expect(reducer(previousState, setFavouritesSpieces("cat"))).toEqual({
    ...initialState,
    spieces: "cat",
    status: "idle",
  });
});
