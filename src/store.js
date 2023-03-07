// weird gotcha - install history v4.10.1
// see open issue: https://github.com/supasate/connected-react-router/issues/312#issuecomment-647082777
// import { createBrowserHistory, History } from "history";
import promise from "redux-promise-middleware";
import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from './modules/dashboard';

// combineReducers will be handled internally by configureStore
const rootReducer = () => ({
  dashboard: dashboardReducer
});

const middlewares = [promise];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const preloadedState = {};
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
  reducer: rootReducer(),
  preloadedState
});

export default store;