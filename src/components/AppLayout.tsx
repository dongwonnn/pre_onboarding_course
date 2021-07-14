import React from "react";
import { FC } from "react";
import styled from "styled-components";

// break point
// 768px 부터 사라짐.

const AppLayoutWrapper = styled.div`
  margin: 0 auto;
  width: 70%;

  @media (max-width: 1400px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AppLayout: FC = ({ children }) => {
  return <AppLayoutWrapper>{children}</AppLayoutWrapper>;
};

export default AppLayout;
