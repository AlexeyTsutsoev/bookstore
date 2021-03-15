import React from "react";
import { TextField } from "@material-ui/core";

const style = {
  marginBottom: "10px",
};

const SearchInput = () => {
  return (
    <form style={style}>
      <TextField fullWidth={true} id='standard-basic' label='Поиск...' />{" "}
    </form>
  );
};

export default SearchInput;
