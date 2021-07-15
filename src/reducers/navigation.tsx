import { INavData } from "../lib/types/INavData";

const LOAD_NAVIGATION_REQUEST = "LOAD_NAVIGATION_REQUEST";

export const loadNavigationRequest = (data: INavData[]) => ({
  type: "LOAD_NAVIGATION_REQUEST",
  data,
});

// 액션 타입
type NavigationAction = ReturnType<typeof loadNavigationRequest>;

export const initialStete = {
  globalNav: [],
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
        globalNav: action.data,
      };
    default:
      return state;
  }
};

export default navigation;
