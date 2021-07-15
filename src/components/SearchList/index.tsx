import React from "react";
import {
  SearchListWrapper,
  HasDetailListWrapper,
  HasNoDetailListWrapper,
  SearchContainer,
} from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { FC } from "react";

interface SearchListProps {
  isActive: boolean;
}

const SearchList: FC<SearchListProps> = ({ isActive }) => {
  const { searchListData, searchListError } = useSelector(
    (state: RootState) => state.searchList
  );

  // 로딩 처리
  // if (searchListLoading) {
  //   return <p>로딩중..</p>;
  // }

  if (searchListError) {
    return <p>네트워크 오류</p>;
  }

  return (
    <SearchContainer isActive={isActive}>
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
    </SearchContainer>
  );
};

export default SearchList;
