import styled from "styled-components";

export const ListLayout = styled.div`
  width: transparent;
  height: 100%;
  padding: 1.5rem;
  padding-top: 0.5rem;
  background-color: transparent;

  & .total-count {
    padding: 1rem 0;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const ListCardView = styled.div`
  width: calc(25% - 1rem);
  height: 24rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background-color: white;
  position: relative;
  cursor: pointer;

  & .thumbnail {
    width: 100%;
    display: flex;

    & img {
      width: 100%;
      min-width: 100%;
      display: inline-block;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }

  & .cardview-content {
    width: 100%;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    box-sizing: border-box;

    & .type {
      font-size: 0.75rem;
      font-weight: 700;
      color: #524fa1;
    }

    & .title {
      font-weight: 700;
    }

    & .content-text {
      color: #5e5f61;
    }
  }

  & .price {
    width: 100%;
    padding: 0 1.25rem;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;

    & p {
      padding: 1.25rem 0;
      color: green;
      font-weight: 700;
      border-top: 0.5px solid gray;
    }
  }
`;
