import { types } from "../types/types";

const initialState = {
  checking: true,
  employees: [],
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teamGet:
      return {
        ...state,
        employees: [...action.payload],
      };

    default:
      return state;
  }
};
