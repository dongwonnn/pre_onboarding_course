import React from "react";
import {
  SearchListWrapper,
  HasDetailListWrapper,
  HasNoDetailListWrapper,
} from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const SearchList = () => {
  const { searchListData } = useSelector(
    (state: RootState) => state.searchList
  );

  return (
    <SearchListWrapper>
      {searchListData !== null &&
        searchListData.map(
          (data) =>
            data.details && (
              <HasDetailListWrapper key={data.id}>
                <h2>
                  {data.category}
                  <RiArrowRightSLine />
                </h2>
                {data.details.map((list) => (
                  <h3 key={list.id}>
                    {list.detailCategory}
                    <RiArrowRightSLine />
                  </h3>
                ))}
              </HasDetailListWrapper>
            )
        )}
      <HasNoDetailListWrapper>
        {searchListData !== null &&
          searchListData.map(
            (data) =>
              data.details === undefined && (
                <div key={data.id}>
                  <h2>
                    {data.category}
                    <RiArrowRightSLine />
                  </h2>
                </div>
              )
          )}
      </HasNoDetailListWrapper>
    </SearchListWrapper>
  );
};

export default SearchList;
