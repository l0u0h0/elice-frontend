import styled from "styled-components";

export const HeaderLayout = styled.header`
  width: 100%;
  height: 4rem;
  padding: 0px 1.5rem;
  background-color: white;
  display: flex;
  position: fixed;
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
