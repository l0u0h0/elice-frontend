import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(240, 241, 243);
  font-size: 100%;
}

#root {
  width: 100%;
  min-height: 100%;
}

img {
  overflow-clip-margin: content-box;
  overflow: clip;
}

p {
  margin: 0;
}
`;

export default GlobalStyles;
