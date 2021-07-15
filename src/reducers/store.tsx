import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./index";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
