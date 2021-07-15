import React, { FC } from "react";
import { useCallback } from "react";
import styled from "styled-components";

export const BodyBlackoutStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: -3;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);
`;

interface BodyBlackoutProps {
  setIsSearchMouseOver: (e: any) => void;
}

const BodyBlackout: FC<BodyBlackoutProps> = ({ setIsSearchMouseOver }) => {
  const onMouseOver = useCallback(
    (e) => {
      e.stopPropagation();
      setIsSearchMouseOver(false);
    },
    [setIsSearchMouseOver]
  );

  return <BodyBlackoutStyled onMouseOver={onMouseOver} />;
};

export default BodyBlackout;
