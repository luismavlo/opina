import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { clippingReducer } from "./clippingReducer";
import { newsReducer } from "./newsReducer";
import { teamReducer } from "./teamReducer";
import { uiReducer } from "./uiReducer";
import { userReducer } from "./userReducer";
import { webinarReducer } from "./webinarReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  team: teamReducer,
  webinar: webinarReducer,
  news: newsReducer,
  ui: uiReducer,
  clipping: clippingReducer,
});
