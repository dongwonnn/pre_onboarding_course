import React from "react";
import styled from "styled-components";

const DummyContainer = styled.div``;

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
  background-color: #ccc;
  border-radius: 10px;
  width: 100%;
  padding-bottom: 80%;
`;

const DummyCard = () => {
  return (
    <DummyContainer>
      <DummyTitle>
        <h1>wanted 합격예측 포지션</h1>
        <p>더 보기</p>
      </DummyTitle>
      <DummyCardWrapper>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
        <div>
          <DummyImage />
          <DummyTextWrapper>
            <h2>프론트엔드 개발자</h2>
            <h3>에이팀벤처스</h3>
            <h4>서울 한국</h4>
            <p>채용 보상금 1,000,000원</p>
          </DummyTextWrapper>
        </div>
      </DummyCardWrapper>
    </DummyContainer>
  );
};

export default DummyCard;
