import { ISearchData } from "../lib/types/ISearchData";

const LOAD_SEARCH_LIST_REQUEST = "LOAD_SEARCH_LIST_REQUEST";

export const loadSearchListRequest = (data: ISearchData[]) => ({
  type: "LOAD_SEARCH_LIST_REQUEST",
  data,
});

// 액션 타입
type SearchListAction = ReturnType<typeof loadSearchListRequest>;

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
        searchListData: action.data,
      };
    default:
      return state;
  }
};

export default SearchList;
