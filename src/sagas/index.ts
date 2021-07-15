import { all } from "redux-saga/effects";

import { navigationSaga } from "./navigation";
import { fieldSaga } from "./field";

export function* rootSaga() {
  yield all([navigationSaga(), fieldSaga()]);
}
