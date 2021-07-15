import styled from "styled-components";

export const GlobalNabWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  width: 70%;
  height: 50px;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  & svg {
    width: 74.38px;
  }

  & p {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & svg {
      display: none;
    }

    & p {
      display: block;
      padding: 14px 13px 14px 20px;
      font-size: 14px;
      font-weight: bold;
    }

    &:hover {
      border-bottom: 2px solid #89b7f5;
    }
  }
`;

export const NavBarWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li {
    padding: 14px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #89b7f5;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }

    & li {
      display: none;
    }

    & li:nth-child(1),
    li:nth-child(2) {
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AvatarWrapper = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ef6c00;
  color: #e6e6e6;

  border: 1px solid #ccc;
  border-radius: 100%;
  font-size: 0.5rem;
`;

export const DashBoradWrapper = styled.div`
  min-width: 92px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: #666;
  padding: 0 9px;
  height: 28px;
  margin-left: 15px;

  border: 0.5px solid #ececec;
  border-radius: 30px;
`;
