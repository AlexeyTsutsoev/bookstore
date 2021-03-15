import React, { useEffect, useState } from "react";
import BookStore from "./pages/BookStore";
import { useDispatch } from "react-redux";
import { auth } from "./store/actionCreators/userAction";
import { CircularProgress } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(auth());
      setIsAuthorized(true);
    })();
  }, []);

  if (!isAuthorized) {
    return <CircularProgress style={{ width: "50%", height: "50%" }} />;
  }

  return (
    <>
      <Header />
      <BookStore />
    </>
  );
}

export default App;
