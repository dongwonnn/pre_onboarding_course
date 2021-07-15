import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { ISearchData } from "../lib/types/ISearchData";
import * as authApi from "../lib/api/data";

const LOAD_SEARCH_LIST_REQUEST = "LOAD_SEARCH_LIST_REQUEST";
const LOAD_SEARCH_LIST_SUCCESS = "LOAD_SEARCH_LIST_SUCCESS";
const LOAD_SEARCH_LIST_FAILURE = "LOAD_SEARCH_LIST_FAILURE";

export const loadSearchListRequest = (payload: ISearchData[]) => ({
  type: LOAD_SEARCH_LIST_REQUEST,
  payload,
});

export const loadSearchListSuccess = (payload: ISearchData[]) => ({
  type: LOAD_SEARCH_LIST_SUCCESS,
  payload,
});

export const loadSearchListFailure = (payload: ISearchData[]) => ({
  type: LOAD_SEARCH_LIST_FAILURE,
  payload,
});

// 액션 타입
type SearchListAction =
  | ReturnType<typeof loadSearchListRequest>
  | ReturnType<typeof loadSearchListSuccess>
  | ReturnType<typeof loadSearchListFailure>;

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

// SAGA 통합
export function* searchListSaga() {
  yield takeLatest(LOAD_SEARCH_LIST_REQUEST, loadSearchListSaga);
}

export const initialStete = {
  searchListData: [],
};

// 초기값 타입
type SearchListState = {
  searchListData: ISearchData[] | null;
};

const SearchList = (
  state: SearchListState = initialStete,
  action: SearchListAction
): SearchListState => {
  switch (action.type) {
    case LOAD_SEARCH_LIST_REQUEST:
      return {
        ...state,
      };
    case LOAD_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        searchListData: action.payload,
      };
    case LOAD_SEARCH_LIST_FAILURE:
      return {
        ...state,
        searchListData: [],
      };
    default:
      return state;
  }
};

export default SearchList;
