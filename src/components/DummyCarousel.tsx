import React from "react";
import styled from "styled-components";

const DummyCarouselProps = styled.section`
  margin-top: 50px;
  width: 100%;
  height: 300px;
  background-color: skyblue;

  margin-bottom: 80px;
`;

const DummyCarousel = () => {
  return <DummyCarouselProps />;
};

export default DummyCarousel;
