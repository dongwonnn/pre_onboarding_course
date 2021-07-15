import React from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { VscBell } from "react-icons/vsc";
import {
  GlobalNabWrapper,
  LogoWrapper,
  NavBarWrapper,
  StateWrapper,
  AvatarWrapper,
  DashBoradWrapper,
  Container,
} from "./styles";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useCallback } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

interface NavCategoryProps {
  setIsSearchMouseOver: (e: any) => void;
}

const NavCategory: FC<NavCategoryProps> = ({ setIsSearchMouseOver }) => {
  const { navData, navError } = useSelector(
    (state: RootState) => state.navigation
  );

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

  // 로딩 처리
  // if (navLoading) {
  //   return <p>로딩 중..</p>;
  // }

  if (navError) {
    return <p>네트워크 오류</p>;
  }

  return (
    <Container>
      <GlobalNabWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavBarWrapper>
          <li>
            <p>홈</p>
          </li>
          {navData !== null &&
            navData.map((data) => (
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
              <AiOutlineMenu />
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
    </Container>
  );
};

export default NavCategory;
