import { types } from "../types/types";

const initialState = {
  isLoading: false,
  isNotification: {
    isNotificationClose: true,
    isNotificationMessage: "",
    isNotificationColor: false
  },
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetIsLoadding:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.uiNotifications:
      return {
        ...state,
        isNotification: action.payload,
      }
    default:
      return state;
  }
};
