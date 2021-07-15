import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { cardData } from "../lib/cardData";
import { ICartData } from "../lib/types/ICartData";

const DummyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 20px;

  & h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & p {
    color: #acacac;
  }
`;

const DummyCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  justify-content: space-between;
  align-content: center;

  @media screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DummyTextWrapper = styled.div`
  padding: 10px;

  & h2 {
    font-size: 1rem;
    font-weight: bold;
    color: #1b1b1b;
    padding-bottom: 5px;
  }
  & h3 {
    font-size: 0.8rem;
    font-weight: bold;
    color: #1b1b1b;
    padding-bottom: 5px;
  }

  & h4 {
    font-size: 0.8rem;
    color: #acacac;
    padding-bottom: 5px;
  }

  & p:last-child {
    font-size: 0.7rem;
    color: #acacac;
    padding-bottom: 10px;
  }
`;

const DummyImage = styled.div`
  background-color: #467500;
  border-radius: 10px;
  width: 100%;
  padding-bottom: 80%;
`;

const DummyCard = () => {
  const [dummyData, setDummyData] = useState<ICartData[]>([]);

  useEffect(() => {
    setDummyData(cardData);
  }, []);

  return (
    <>
      <DummyTitle>
        <h1>wanted 합격예측 포지션</h1>
        <p>더 보기</p>
      </DummyTitle>
      <DummyCardWrapper>
        {dummyData !== undefined &&
          dummyData.map((data) => (
            <div key={data.id}>
              <DummyImage />
              <DummyTextWrapper>
                <h2>{data.field}</h2>
                <h3>{data.company}</h3>
                <h4>{data.location}</h4>
                <p>{data.option}</p>
              </DummyTextWrapper>
            </div>
          ))}
      </DummyCardWrapper>
    </>
  );
};

export default DummyCard;
