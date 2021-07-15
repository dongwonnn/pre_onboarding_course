import React, { FC } from "react";
import styled from "styled-components";

/* 
  xs <  ~ 768      : 사라짐
  sm < 768 ~ 992   : 
  md < 992 ~ 1200  : 
  lg < 1200 ~      
 */

// 990 에서 card 2개

const AppLayoutWrapper = styled.div`
  margin: 0 auto;
  width: 70%;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const AppLayout: FC = ({ children }) => {
  return <AppLayoutWrapper>{children}</AppLayoutWrapper>;
};

export default AppLayout;
