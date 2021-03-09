import React, { useEffect } from "react";
import BookStore from "./pages/BookStore";
import store from "./store/store";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { checkUser, refreshToken } from "./api/user";
import { setUser } from "./store/actionCreators/userAction";

function App() {
  const dispatch = useDispatch();

  const userHandler = async () => {
    try {
      const result = await checkUser();
      dispatch(setUser(result.data.user));
    } catch (err) {
      console.log(err);
      if (err.data.type === "TokenExpiredError") {
        const refresh = await refreshToken();
        dispatch(setUser(refresh.data.user));
        localStorage.setItem("accessToken", refresh.data.token.accessToken);
        localStorage.setItem("refreshToken", refresh.data.token.refreshToken);
      }
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
