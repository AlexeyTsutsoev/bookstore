import React from "react";
import BookStore from "./pages/BookStore";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BookStore />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
