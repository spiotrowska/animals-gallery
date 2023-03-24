import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState as favouritesInitialState } from "../../store/features/favourites/favouritesSlice";
import { initialState as imagesInitialState } from "../../store/features/images/imagesSlice";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import Footer from "./Footer";

describe("With React Testing Library", () => {
  const initialState = {
    images: favouritesInitialState,
    favourites: imagesInitialState,
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it('Shows "Created by Sylwia Wochniak"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/Created by Sylwia Wochniak/i);
    expect(linkElement).toBeInTheDocument();
  });
});
