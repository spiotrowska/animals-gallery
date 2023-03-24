import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState as favouritesInitialState } from "../../store/features/favourites/favouritesSlice";
import { initialState as imagesInitialState } from "../../store/features/images/imagesSlice";
import Navbar from "./Navbar";

describe("With React Testing Library", () => {
  const initialState = {
    images: favouritesInitialState,
    favourites: imagesInitialState,
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it('Shows "Animals Gallery" title', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/Animals Gallery/i);
    expect(linkElement).toBeInTheDocument();
  });
});
