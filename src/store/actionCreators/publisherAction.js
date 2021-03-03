import {
  ADD_PUBLISHER_FILTER,
  REMOVE_PUBLISHER_FILTER,
} from "../actions/types";

export const addPublisherFilter = (id) => {
  return {
    type: ADD_PUBLISHER_FILTER,
    payload: id,
  };
};

export const removePublisherFilter = (id) => {
  return {
    type: REMOVE_PUBLISHER_FILTER,
    payload: id,
  };
};
