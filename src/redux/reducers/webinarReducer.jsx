import { types } from "../types/types";

const initialState = {
  webinars: [],
  webSelected: null,
};

export const webinarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.webinarGet:
      return {
        ...state,
        webinars: [...action.payload],
      };

    case types.webinarSelected:
      return {
        ...state,
        webSelected: action.payload,
      };

    default:
      return state;
  }
};
