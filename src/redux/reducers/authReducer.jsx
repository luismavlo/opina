import { types } from "../types/types";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
      };

    case types.clearLogin:
      return {
        ...state,
        ...{uid: "", name: "", role: "", avatar: ""}
      }

    default:
      return state;
  }
};
