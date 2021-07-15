import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import * as authApi from "../lib/api/data";
import {
  loadSearchListRequest,
  LOAD_SEARCH_LIST_FAILURE,
  LOAD_SEARCH_LIST_REQUEST,
  LOAD_SEARCH_LIST_SUCCESS,
} from "../reducers/searchList";

// saga 생성
function* loadSearchListSaga(action: ReturnType<typeof loadSearchListRequest>) {
  try {
    const response: AxiosResponse = yield call(
      authApi.getSearchListData,
      action.payload
    );

    yield put({
      type: LOAD_SEARCH_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_SEARCH_LIST_FAILURE,
      payload: e,
    });
  }
}

export function* searchListSaga() {
  yield takeLatest(LOAD_SEARCH_LIST_REQUEST, loadSearchListSaga);
}
