import { SET_USER, SIGN_OUT } from "../actions/types";

const initialState = {
  user: {},
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case SIGN_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        user: action.payload,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
