import { combineReducers } from "redux";

import navigation from "./navigation";
import searchList from "./searchList";

const rootReducer = combineReducers({
  navigation,
  searchList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
