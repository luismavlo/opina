import { types } from "../types/types";

const initialState = {
  allNews: [],
  newsSelected: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.newsGet:
      return {
        ...state,
        allNews: [...action.payload],
      };

    case types.newsSelected:
      return {
        ...state,
        newsSelected: action.payload,
      };

    default:
      return state;
  }
};
