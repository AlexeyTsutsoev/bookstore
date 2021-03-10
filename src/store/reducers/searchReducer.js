import { SET_KEYWORD } from "../actions/types";

const initialState = "";

const searchReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return action.payload;
    default:
      return state;
  }
};

export default searchReduser;
