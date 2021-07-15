import React, { useState, useCallback, FC } from "react";

import NavCategory from "./NavCategory";
import FieldCategory from "./FieldCategory";

import BodyBlackout from "../lib/styles/BodyBlackout";

const GlobalLayout: FC = ({ children }) => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);

  const onMouseLeave = useCallback(() => {
    setIsSearchMouseOver(false);
  }, []);

  return (
    <>
      <div onMouseLeave={onMouseLeave}>
        <NavCategory setIsSearchMouseOver={setIsSearchMouseOver} />
        <FieldCategory isActive={isSearchMouseOver} />
        {isSearchMouseOver && <BodyBlackout />}
      </div>
      {children}
    </>
  );
};

export default GlobalLayout;
