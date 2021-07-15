import { INavData } from "../lib/types/INavData";

export const LOAD_NAVIGATION_REQUEST = "LOAD_NAVIGATION_REQUEST" as const;
export const LOAD_NAVIGATION_SUCCESS = "LOAD_NAVIGATION_SUCCESS" as const;
export const LOAD_NAVIGATION_FAILURE = "LOAD_NAVIGATION_FAILURE" as const;

export const loadNavigationRequest = (payload: INavData[]) => ({
  type: LOAD_NAVIGATION_REQUEST,
  payload,
});

export const loadNavigationSuccess = (payload: INavData[]) => ({
  type: LOAD_NAVIGATION_SUCCESS,
  payload,
});

export const loadNavigationFailure = (payload: string) => ({
  type: LOAD_NAVIGATION_FAILURE,
  payload,
});

// 액션 타입
type NavigationAction =
  | ReturnType<typeof loadNavigationRequest>
  | ReturnType<typeof loadNavigationSuccess>
  | ReturnType<typeof loadNavigationFailure>;

export const initialStete = {
  globalNav: null,
  navLoading: false,
  navError: null,
};

// 초기값 타입
type NavigationState = {
  globalNav: INavData[] | null;
  navLoading: boolean;
  navError: string | null;
};

const navigation = (
  state: NavigationState = initialStete,
  action: NavigationAction
): NavigationState => {
  switch (action.type) {
    case LOAD_NAVIGATION_REQUEST:
      return {
        ...state,
        navLoading: true,
        navError: null,
      };
    case LOAD_NAVIGATION_SUCCESS:
      return {
        ...state,
        globalNav: action.payload,
        navLoading: false,
        navError: null,
      };
    case LOAD_NAVIGATION_FAILURE:
      return {
        ...state,
        globalNav: [],
        navLoading: false,
        navError: action.payload,
      };
    default:
      return state;
  }
};

export default navigation;
