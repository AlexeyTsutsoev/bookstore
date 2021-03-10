import React, { useEffect, useState } from "react";
import BookStore from "./pages/BookStore";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./store/actionCreators/userAction";
import { CircularProgress } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(auth());
      } catch (err) {
        console.log(err);
      }
      setIsAuthorized(true);
    })();
  }, []);

  if (!isAuthorized) {
    return <CircularProgress style={{ width: "50%", height: "50%" }} />;
  }

  return (
    <BrowserRouter>
      <BookStore />
    </BrowserRouter>
  );
}

export default App;
