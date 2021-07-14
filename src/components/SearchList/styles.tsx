import styled from "styled-components";

export const SearchListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  column-gap: 10px;
  justify-content: space-between;
  align-content: flex-start;

  padding-top: 40px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & h2 {
    font-size: 17px;
    padding-bottom: 15px;
    color: #333;

    &:hover {
      cursor: pointer;
    }
  }

  & h3 {
    font-size: 13px;
    padding: 5px 0;
    color: #999;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HasDetailListWrapper = styled.div`
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
