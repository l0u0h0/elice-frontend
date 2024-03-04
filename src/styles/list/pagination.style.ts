import styled from "styled-components";

export const PaginationLayout = styled.div<{ $prev: boolean; $next: boolean }>`
  width: transparent;
  height: 100%;
  padding: 1.5rem;
  padding-bottom: 2.5rem;
  background-color: transparent;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  & .prev-arrow {
    width: 1.5rem;
    height: 1.5rem;

    & .arrow-btn {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${(props) => (props.$prev ? `black` : `#ccc`)};
    }
  }

  & .next-arrow {
    width: 1.5rem;
    height: 1.5rem;

    & .arrow-btn {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${(props) => (props.$next ? `black` : `#ccc`)};
    }
  }
`;

export const PaginationButton = styled.button<{ $cur: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.25rem;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.$cur ? `white` : `gray`)};
  background-color: ${(props) => (props.$cur ? `#524FA1` : `transparent`)};
  transition: all 0.25s;

  &:hover {
    color: #524fa1;
    background-color: transparent;
    font-weight: 700;
  }
`;
