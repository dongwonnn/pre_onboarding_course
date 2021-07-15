import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
`;

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
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  & svg {
    width: 74.38px;
    height: 16.8px;
  }

  & p {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBarWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li:first-child {
    display: none;
  }

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

  @media (max-width: 830px) {
    p {
      font-size: 12.5px;
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

  @media (max-width: 1200px) {
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
