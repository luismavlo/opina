import { types } from "../types/types";

export const setIsLoading = (isLoading) => ({
  type: types.uiSetIsLoadding,
  payload: isLoading,
});

export const setIsNotificationClose = (isNotificationClose) => ({
  type: types.uiNotifications,
  payload: isNotificationClose,
});