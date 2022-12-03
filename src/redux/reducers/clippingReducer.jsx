import { types } from "../types/types";

const initialState = {
  clippings: [],
};

export const clippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.clippingGet:
      return {
        ...state,
        clippings: [...action.payload],
      };

    default:
      return state;
  }
};
