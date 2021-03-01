import { SET_USER, SIGN_OUT } from "../actions/types";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: {},
  };
};
