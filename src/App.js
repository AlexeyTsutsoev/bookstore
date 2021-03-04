import React, { useEffect } from "react";
import BookStore from "./pages/BookStore";
import store from "./store/store";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { checkUser } from "./api/user";
import { setUser } from "./store/actionCreators/userAction";

function App() {
  const dispatch = useDispatch();

  const userHandler = async () => {
    try {
      const result = await checkUser();

      dispatch(setUser(result.data.user));
      localStorage.setItem("token", result.data.token);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    userHandler();
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BookStore />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
