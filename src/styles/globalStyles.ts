import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media screen and (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
select,
button {
  font: 400 1rem inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
