import React, { useState } from "react";
import { useCallback } from "react";
import { FC } from "react";
import BodyBlackout from "../lib/styles/BodyBlackout";
import NavCategory from "./NavCategory";
import FieldCategory from "./FieldCategory";

const GlobalLayout: FC = ({ children }) => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);

  const onMouseLeave = useCallback(() => {
    setIsSearchMouseOver(false);
  }, []);

  return (
    <>
      <section onMouseLeave={onMouseLeave}>
        <NavCategory setIsSearchMouseOver={setIsSearchMouseOver} />
        <FieldCategory isActive={isSearchMouseOver} />
        {isSearchMouseOver && <BodyBlackout />}
      </section>
      {children}
    </>
  );
};

export default GlobalLayout;
