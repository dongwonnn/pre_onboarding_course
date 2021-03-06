import { call, put, takeLatest } from "redux-saga/effects";
import {
  loadNavigationRequest,
  LOAD_NAVIGATION_FAILURE,
  LOAD_NAVIGATION_REQUEST,
  LOAD_NAVIGATION_SUCCESS,
} from "../reducers/navigation";
import * as authApi from "../lib/api/data";
import { AxiosResponse } from "axios";

// saga
function* loadNavigationSaga(action: ReturnType<typeof loadNavigationRequest>) {
  try {
    const response: AxiosResponse = yield call(authApi.getNavData);

    yield put({
      type: LOAD_NAVIGATION_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_NAVIGATION_FAILURE,
      payload: e,
    });
  }
}

export function* navigationSaga() {
  yield takeLatest(LOAD_NAVIGATION_REQUEST, loadNavigationSaga);
}
