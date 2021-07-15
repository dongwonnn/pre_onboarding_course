import styled from "styled-components";

export const SearchListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin: 0 auto;
  background-color: white;

  width: 70%;
  padding-top: 38px;

  & h2 {
    font-size: 17px;
    padding-bottom: 15px;
    color: #333;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      cursor: pointer;
    }
  }

  & h3 {
    font-size: 13px;
    padding: 5px 0;
    color: #999;

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

export const HasDetailListWrapper = styled.div`
  min-width: 16%;
  position: relative;

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

export const HasNoDetailListWrapper = styled.div`
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
