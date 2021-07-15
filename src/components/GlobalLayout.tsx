import React, { useState, useCallback, FC } from "react";

import NavCategory from "./NavCategory";
import FieldCategory from "./FieldCategory";

import BodyBlackout from "../lib/styles/BodyBlackout";

const GlobalLayout: FC = ({ children }) => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onGlobalNavOut = useCallback(() => {
    setIsSearchMouseOver(false);
    setIsFocused(false);
  }, []);

  return (
    <>
      <div onMouseLeave={onGlobalNavOut}>
        <NavCategory
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          setIsSearchMouseOver={setIsSearchMouseOver}
        />
        {/* transtion 효과를 주기 위해 숨김 처리 */}
        <FieldCategory isActive={isSearchMouseOver} />
        {isSearchMouseOver && <BodyBlackout />}
      </div>
      {children}
    </>
  );
};

export default GlobalLayout;
