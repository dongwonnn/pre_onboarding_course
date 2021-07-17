import React, { useState, FC } from "react";

import NavCategory from "./NavCategory";
import FieldCategory from "./FieldCategory";

import BodyBlackout from "../lib/styles/BodyBlackout";
import styled from "styled-components";

const GlobalLayoutWrapper = styled.div`
  position: absolute;
  z-index: 0;
`;

const GlobalLayout: FC = ({ children }) => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <GlobalLayoutWrapper>
        <NavCategory
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          setIsSearchMouseOver={setIsSearchMouseOver}
        />
        {/* transtion 효과를 주기 위해 숨김 처리 */}
        <FieldCategory isActive={isSearchMouseOver} />
        <BodyBlackout
          isActive={isSearchMouseOver}
          setIsSearchMouseOver={setIsSearchMouseOver}
          setIsFocused={setIsFocused}
        />
      </GlobalLayoutWrapper>
      {children}
    </>
  );
};

export default GlobalLayout;
