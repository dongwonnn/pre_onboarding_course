import React from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

interface GlobalNavBarProps {
  setIsSearchMouseOver: (e: any) => void;
}

const GlobalNavBar: FC<GlobalNavBarProps> = ({ setIsSearchMouseOver }) => {
  const { globalNav } = useSelector((state: RootState) => state.navigation);

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

  return (
    <GlobalNabWrapper>
      <LogoWrapper>
        <p>홈</p>
        <Logo />
      </LogoWrapper>
      <NavBarWrapper>
        {globalNav !== null &&
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
