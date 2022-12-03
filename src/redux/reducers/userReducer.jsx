import { types } from "../types/types";

const initialState = {
  checking: true,
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userGet:
      return {
        ...state,
        users: [...action.payload],
      };

    default:
      return state;
  }
};
