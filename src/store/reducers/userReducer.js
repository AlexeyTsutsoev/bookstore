import { SET_USER, SIGN_OUT } from "../actions/types";

const initialState = {
  user: {},
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case SIGN_OUT:
      localStorage.removeItem("token");
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
