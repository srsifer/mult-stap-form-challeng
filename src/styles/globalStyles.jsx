import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #177450;
    color: #ffffff;
  }

  :first-letter {
    text-transform: uppercase;
  }
`;
