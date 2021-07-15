import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import navigation, { navigationSaga } from "./navigation";
import searchList, { searchListSaga } from "./searchList";

const rootReducer = combineReducers({
  navigation,
  searchList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([navigationSaga(), searchListSaga()]);
}
