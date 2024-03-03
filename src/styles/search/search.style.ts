import styled from "styled-components";

export const SearchLayout = styled.div`
  width: transparent;
  height: 100%;
  padding: 1.5rem;
  background-color: transparent;
`;

export const SearchInputLayout = styled.div<{ $focus: boolean }>`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  background-color: white;
  box-sizing: border-box;
  border-radius: 3px;
  border: ${(props) =>
    props.$focus ? `1px solid rgb(82, 79, 161)` : `1px solid gray`};

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
