import { all } from "redux-saga/effects";

import { navigationSaga } from "./navigation";
import { searchListSaga } from "./searchList";

export function* rootSaga() {
  yield all([navigationSaga(), searchListSaga()]);
}
