import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    height: 0vh;
    opacity: 0;
  }
  to {
    height: 324px;
    opacity: 1;
  }
`;

export const FieldWrapper = styled.article<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "display" : "none")};

  width: 100%;
  position: fixed;
  top: 50px;
  padding-top: 38px;
  background-color: white;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideDown};
  animation-fill-mode: forwards;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FieldData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 70%;
  margin: 0 auto;

  & h2 {
    font-size: 17px;
    color: #333;
    padding-bottom: 15px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      cursor: pointer;
    }
  }

  & h3 {
    font-size: 13px;
    color: #999;
    padding: 5px 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1400px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;

export const HasDetailListWrapper = styled.section`
  position: relative;
  min-width: 16%;

  & svg {
    position: absolute;
    top: 0;
    right: 0;

    font-size: 20px;
    color: #999;
  }

  & h3 {
    & svg {
      display: none;
    }
  }

  & h3:last-child {
    position: relative;

    & svg {
      display: block;
      position: absolute;
      top: 0;
      right: 0;

      font-size: 20px;
      color: #999;
    }
  }
`;

export const HasNoDetailListWrapper = styled.section`
  min-width: 16%;

  & h2 {
    position: relative;

    & svg {
      position: absolute;
      top: 0;
      right: 0;

      font-size: 20px;
      color: #999;
    }
  }
`;
