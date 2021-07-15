import { ISearchData } from "../lib/types/ISearchData";

export const LOAD_SEARCH_LIST_REQUEST = "LOAD_SEARCH_LIST_REQUEST" as const;
export const LOAD_SEARCH_LIST_SUCCESS = "LOAD_SEARCH_LIST_SUCCESS" as const;
export const LOAD_SEARCH_LIST_FAILURE = "LOAD_SEARCH_LIST_FAILURE" as const;

export const loadSearchListRequest = (payload: ISearchData[]) => ({
  type: LOAD_SEARCH_LIST_REQUEST,
  payload,
});

export const loadSearchListSuccess = (payload: ISearchData[]) => ({
  type: LOAD_SEARCH_LIST_SUCCESS,
  payload,
});

export const loadSearchListFailure = (payload: string) => ({
  type: LOAD_SEARCH_LIST_FAILURE,
  payload,
});

// 액션 타입
type SearchListAction =
  | ReturnType<typeof loadSearchListRequest>
  | ReturnType<typeof loadSearchListSuccess>
  | ReturnType<typeof loadSearchListFailure>;

export const initialStete = {
  searchListData: [],
  searchListLoading: false,
  searchListError: null,
};

// 초기값 타입
type SearchListState = {
  searchListData: ISearchData[] | null;
  searchListLoading: boolean;
  searchListError: string | null;
};

const SearchList = (
  state: SearchListState = initialStete,
  action: SearchListAction
): SearchListState => {
  switch (action.type) {
    case LOAD_SEARCH_LIST_REQUEST:
      return {
        ...state,
        searchListLoading: true,
        searchListError: null,
      };
    case LOAD_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        searchListData: action.payload,
        searchListLoading: false,
        searchListError: null,
      };
    case LOAD_SEARCH_LIST_FAILURE:
      return {
        ...state,
        searchListData: [],
        searchListLoading: false,
        searchListError: action.payload,
      };
    default:
      return state;
  }
};

export default SearchList;
