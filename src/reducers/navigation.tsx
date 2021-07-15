import { INavData } from "../lib/types/INavData";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import * as authApi from "../lib/api/data";

const LOAD_NAVIGATION_REQUEST = "LOAD_NAVIGATION_REQUEST";
const LOAD_NAVIGATION_SUCCESS = "LOAD_NAVIGATION_SUCCESS";
const LOAD_NAVIGATION_FAILURE = "LOAD_NAVIGATION_FAILURE";

export const loadNavigationRequest = (payload: INavData[]) => ({
  type: LOAD_NAVIGATION_REQUEST,
  payload,
});

export const loadNavigationSuccess = (payload: INavData[]) => ({
  type: LOAD_NAVIGATION_SUCCESS,
  payload,
});

export const loadNavigationFailure = (payload: INavData[]) => ({
  type: LOAD_NAVIGATION_FAILURE,
  payload,
});

// 액션 타입
type NavigationAction =
  | ReturnType<typeof loadNavigationRequest>
  | ReturnType<typeof loadNavigationSuccess>
  | ReturnType<typeof loadNavigationFailure>;

// saga 생성
function* loadNavigationSaga(action: ReturnType<typeof loadNavigationRequest>) {
  try {
    const response: AxiosResponse = yield call(
      authApi.getNavData,
      action.payload
    );

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

// SAGA 통합
export function* navigationSaga() {
  yield takeLatest(LOAD_NAVIGATION_REQUEST, loadNavigationSaga);
}

export const initialStete = {
  globalNav: null,
};

// 초기값 타입
type NavigationState = {
  globalNav: INavData[] | null;
};

const navigation = (
  state: NavigationState = initialStete,
  action: NavigationAction
): NavigationState => {
  switch (action.type) {
    case LOAD_NAVIGATION_REQUEST:
      return {
        ...state,
      };
    case LOAD_NAVIGATION_SUCCESS:
      return {
        ...state,
        globalNav: action.payload,
      };
    case LOAD_NAVIGATION_FAILURE:
      return {
        ...state,
        globalNav: [],
      };
    default:
      return state;
  }
};

export default navigation;
