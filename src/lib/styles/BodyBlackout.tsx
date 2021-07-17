import React from "react";
import { useCallback } from "react";
import { FC } from "react";
import styled from "styled-components";

export const BodyBlackoutStyled = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};

  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -1;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface BodyBlackoutProps {
  isActive: boolean;
  setIsSearchMouseOver: (e: any) => void;
  setIsFocused: (e: any) => void;
}

const BodyBlackout: FC<BodyBlackoutProps> = ({
  isActive,
  setIsSearchMouseOver,
  setIsFocused,
}) => {
  const onMouseOver = useCallback(
    (e) => {
      e.stopPropagation();
      setIsSearchMouseOver(false);
      setIsFocused(false);
    },
    [setIsSearchMouseOver, setIsFocused]
  );

  return <BodyBlackoutStyled isActive={isActive} onMouseOver={onMouseOver} />;
};

export default BodyBlackout;
