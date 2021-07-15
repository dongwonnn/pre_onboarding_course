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
  const { fieldData, fieldError } = useSelector(
    (state: RootState) => state.field
  );

  // 로딩 처리
  // if (searchListLoading) {
  //   return <p>로딩중..</p>;
  // }

  if (fieldError) {
    return <p>네트워크 오류</p>;
  }

  return (
    <SearchContainer isActive={isActive}>
      <SearchListWrapper>
        {fieldData !== null &&
          fieldData.map(
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
          {fieldData !== null &&
            fieldData.map(
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
