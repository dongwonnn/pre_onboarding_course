import React from "react";
import { FC } from "react";
import styled from "styled-components";

export const BodyBlackoutStyled = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};

  width: 100%;
  height: 100%;

  position: fixed;
  left: 50%;
  top: 50%;
  z-index: -1;

  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface BodyBlackoutProps {
  isActive: boolean;
}

const BodyBlackout: FC<BodyBlackoutProps> = ({ isActive }) => {
  return <BodyBlackoutStyled isActive={isActive} />;
};

export default BodyBlackout;
