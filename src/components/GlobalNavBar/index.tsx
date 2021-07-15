import React, { useEffect } from "react";
import { useState } from "react";
import { navData } from "../../lib/data";
import { INavData } from "../../lib/types/INavData";
import { AiOutlineSearch } from "react-icons/ai";
import { VscBell } from "react-icons/vsc";
import {
  GlobalNabWrapper,
  LogoWrapper,
  NavBarWrapper,
  StateWrapper,
  AvatarWrapper,
  DashBoradWrapper,
} from "./styles";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useCallback } from "react";
import { FC } from "react";

interface GlobalNavBarProps {
  setIsSearchMouseOver: (e: any) => void;
}

const GlobalNavBar: FC<GlobalNavBarProps> = ({ setIsSearchMouseOver }) => {
  const [globalNav, setGlobalNav] = useState<INavData[]>();
  const onMouseOver = useCallback(
    (e) => {
      if (e.target.id === "1") {
        setIsSearchMouseOver(true);
      } else {
        setIsSearchMouseOver(false);
      }
    },
    [setIsSearchMouseOver]
  );

  useEffect(() => {
    setGlobalNav(navData);
  }, []);

  return (
    <GlobalNabWrapper>
      <LogoWrapper>
        <p>홈</p>
        <Logo />
      </LogoWrapper>
      <NavBarWrapper>
        {globalNav !== undefined &&
          globalNav.map((data) => (
            <li key={data.id} id={String(data.id)} onMouseOver={onMouseOver}>
              <p id={String(data.id)} onMouseOver={onMouseOver}>
                {data.category}
              </p>
            </li>
          ))}
      </NavBarWrapper>
      <aside>
        <StateWrapper>
          <li>
            <AiOutlineSearch />
          </li>
          <li>
            <VscBell />
          </li>
          <li>
            <AvatarWrapper>동원</AvatarWrapper>
          </li>
          <li>
            <DashBoradWrapper>기업 서비스</DashBoradWrapper>
          </li>
        </StateWrapper>
      </aside>
    </GlobalNabWrapper>
  );
};

export default GlobalNavBar;
