import styled from "styled-components";

export const FilterLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid rgb(201, 202, 204);
  font-size: 0.75rem;

  & .filter-row {
    width: 100%;
    height: 3rem;
    display: flex;
  }

  & .filter-row .row-title {
    min-width: 5rem;
    padding: 0.875rem 1rem;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #5e5f61;
    background-color: rgb(249, 250, 252);
    border-right: 1px solid rgb(201, 202, 204);
  }
`;

export const FilterButton = styled.button<{ $isSelected: boolean }>`
  min-width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  padding: 0.25rem 0.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected ? `#524FA1` : `rgb(240, 241, 243)`};
  color: ${(props) => (props.$isSelected ? `white` : `rgb(94, 95, 97)`)};
  border: none;
  border-radius: 1.875rem;
  transition: all 0.25s;

  &:hover {
    color: ${(props) => (props.$isSelected ? `white` : `black`)};
    background-color: ${(props) =>
      props.$isSelected ? `rgb(62, 50, 131)` : `rgb(225, 226, 228)`};
  }
`;
