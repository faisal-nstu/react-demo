// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
// import { applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";

// const middlewares = [promise, thunk];

// let composeEnhancers = compose;

// if (process.env.NODE_ENV === "development") {
//     const { logger } = require("redux-logger");

//     middlewares.push(logger);

//     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//         composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//     }
// }

// export default composeEnhancers(applyMiddleware(...middlewares))(configureStore)(reducers);




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
const preloadedState = {};
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(promise),
  reducer: rootReducer(history),
  preloadedState
});

export default store;