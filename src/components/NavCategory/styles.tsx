import styled from "styled-components";

export const GlobalNavWrapper = styled.article`
  width: 100%;

  position: fixed;
  top: 0;

  background-color: white;
  border-bottom: 1px solid #ccc;
`;

export const GlobalNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 70%;
  height: 50px;

  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  & svg {
    width: 74.38px;
    height: 16.8px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBarWrapper = styled.ul<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li:first-child {
    display: none;
    border-bottom: ${(props) =>
      props.isActive ? "2px solid #89b7f5" : "none"};
  }

  & li {
    font-size: 14px;
    font-weight: bold;
    padding: 14px;
    color: #333;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #89b7f5;
    }
  }

  & li:first-child {
    display: none;
  }

  & li:nth-child(2) {
    border-bottom: ${(props) =>
      props.isActive ? "2px solid #89b7f5" : "none"};
  }

  @media screen and (max-width: 1000px) {
    p {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 830px) {
    p {
      font-size: 12.5px;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }

    & li {
      display: none;
    }

    & li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      display: block;
    }
  }
`;

export const StateWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li {
    padding: 0 11px;

    svg {
      color: #1a1a1a;
      font-size: 1.125rem;
    }
  }

  & li:nth-child(3) {
    display: none;
  }

  & li:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:before {
      content: "|";
      font-size: 10px;
      color: #ccc;
      margin: 0 10px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  // 실제 사이트 break point
  @media screen and (max-width: 990px) {
    & li:nth-child(3) {
      display: block;
    }

    & li:nth-child(4) {
      display: none;
    }

    & li:nth-child(5) {
      display: none;
    }
  }
`;

export const AvatarWrapper = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ef6c00;
  font-size: 0.5rem;
  color: #e6e6e6;

  border: 1px solid #ccc;
  border-radius: 100%;
`;

export const DashBoradWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 92px;
  height: 28px;

  font-size: 13px;
  color: #666;

  padding: 0 9px;
  margin-left: 15px;
  border: 0.5px solid #ececec;
  border-radius: 30px;
`;
