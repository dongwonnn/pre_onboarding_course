import { combineReducers } from "redux";

import navigation from "./navigation";
import field from "./field";

const rootReducer = combineReducers({
  navigation,
  field,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
