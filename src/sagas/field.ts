import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import * as authApi from "../lib/api/data";
import {
  loadFieldRequest,
  LOAD_FIELD_FAILURE,
  LOAD_FIELD_REQUEST,
  LOAD_FIELD_SUCCESS,
} from "../reducers/field";

// saga 생성
function* loadFieldSaga(action: ReturnType<typeof loadFieldRequest>) {
  try {
    const response: AxiosResponse = yield call(authApi.getFieldData);

    yield put({
      type: LOAD_FIELD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_FIELD_FAILURE,
      payload: e,
    });
  }
}

export function* fieldSaga() {
  yield takeLatest(LOAD_FIELD_REQUEST, loadFieldSaga);
}
