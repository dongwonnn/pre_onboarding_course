import React from "react";
import styled from "styled-components";

export const BodyBlackoutStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.08);
`;

const BodyBlackout = () => {
  return <BodyBlackoutStyled />;
};

export default BodyBlackout;
