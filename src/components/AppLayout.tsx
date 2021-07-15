import React from "react";
import { FC } from "react";
import styled from "styled-components";

/* 
  xs <  ~ 768      : 사라짐
  sm < 768 ~ 992   : 
  md < 992 ~ 1200  : 
  lg < 1200 ~      
 */

const AppLayoutWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  z-index: -1000;
`;

const AppLayout: FC = ({ children }) => {
  return <AppLayoutWrapper>{children}</AppLayoutWrapper>;
};

export default AppLayout;
