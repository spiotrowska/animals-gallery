import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";
import { initialState as favouritesInitialState } from "./store/features/favourites/favouritesSlice";
import { initialState as imagesInitialState } from "./store/features/images/imagesSlice";

describe("With React Testing Library", () => {
  const initialState = {
    images: favouritesInitialState,
    favourites: imagesInitialState,
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it('Shows "See and love them!"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/See and love them!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
