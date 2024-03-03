import styled from "styled-components";

export const SearchLayout = styled.div`
  width: transparent;
  height: 100%;
  padding: 1.5rem;
  background-color: transparent;

  & .title {
    width: 100%;
    height: auto;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #524fa1;
    border-bottom: 0.5px solid gray;
    display: flex;

    & p {
      padding: 1rem;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 3px solid #524fa1;
    }
  }
`;

export const SearchInputLayout = styled.div<{ $focus: boolean }>`
  width: 100%;
  margin-bottom: 0.625rem;
  padding: 0.5rem;
  display: flex;
  background-color: white;
  box-sizing: border-box;
  border-radius: 3px;
  border: ${(props) =>
    props.$focus
      ? `1px solid rgb(82, 79, 161)`
      : `1px solid rgb(201, 202, 204)`};

  & input {
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem;
    font-size: 0.875rem;
    border: none;
  }

  & input:focus {
    outline: none;
  }

  & img {
    position: relative;
    width: 1.5rem;
    padding: 0 0.5rem;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
