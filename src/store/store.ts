import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./features/images/imagesSlice";
import favouritesReducer from "./features/favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    favourites: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
