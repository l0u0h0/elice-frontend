import styled from "styled-components";

export const HeaderLayout = styled.header`
  width: transparent;
  height: 4rem;
  padding: 0px 1.5rem;
  background-color: white;
  display: flex;
  top: 0px;
  position: sticky;
  z-index: 99;
`;

export const LogoLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    width: auto;
    height: 100%;
    max-height: 2rem;
  }
`;
