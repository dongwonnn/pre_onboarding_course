import React, { useState } from "react";
import { useCallback } from "react";
import { FC } from "react";
import BodyBlackout from "../assets/BodyBlackout";
import GlobalNavBar from "./GlobalNavBar";
import SearchList from "./SearchList";

const GlobalLayout: FC = ({ children }) => {
  const [isSearchMouseOver, setIsSearchMouseOver] = useState(false);

  const onMouseLeave = useCallback(() => {
    setIsSearchMouseOver(false);
  }, []);

  return (
    <>
      <section onMouseLeave={onMouseLeave}>
        <GlobalNavBar setIsSearchMouseOver={setIsSearchMouseOver} />
        <SearchList isActive={isSearchMouseOver} />
        {isSearchMouseOver && <BodyBlackout />}
      </section>
      {children}
    </>
  );
};

export default GlobalLayout;
