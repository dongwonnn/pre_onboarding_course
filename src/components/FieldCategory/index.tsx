import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../reducers";

import {
  FieldData,
  HasDetailListWrapper,
  HasNoDetailListWrapper,
  FieldWrapper,
} from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";

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
    <FieldWrapper isActive={isActive}>
      <FieldData>
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
      </FieldData>
    </FieldWrapper>
  );
};

export default SearchList;
