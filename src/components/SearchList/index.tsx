import React, { useState } from "react";
import { useEffect } from "react";
import { searchData } from "../../lib/data";
import { ISearchData } from "../../lib/types/ISearchData";
import {
  SearchListWrapper,
  HasDetailListWrapper,
  HasNoDetailListWrapper,
} from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";

const SearchList = () => {
  const [searchListData, setSearchListData] = useState<ISearchData[]>();

  useEffect(() => {
    setSearchListData(searchData);
  }, []);

  return (
    <SearchListWrapper>
      {searchListData !== undefined &&
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
        {searchListData !== undefined &&
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
