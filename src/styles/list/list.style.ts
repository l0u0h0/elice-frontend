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
  margin: auto 0;
  display: flex;
  gap: 1.75rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const ListCardView = styled.div`
  width: calc(25% - 24px);
  min-width: 18rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background-color: white;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    scale: 1.05;
  }

  & .thumbnail-image {
    width: 100%;
    height: 145px;
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

  & .thumbnail-logo {
    width: 100%;
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(58, 58, 76);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    & img {
      width: 6.5rem;
      height: 6.5rem;
      display: inline-block;
      background-color: rgb(58, 58, 76);
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
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
      height: 4rem;
      color: #5e5f61;
      overflow: hidden;
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
