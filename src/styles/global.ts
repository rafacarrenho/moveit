import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0
    }

    html, body{
      height: 100%;
    }

    body{
      margin: 0 !important
    }

    @media screen and (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media screen and (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

    body,
    input,
    textarea,
    button {
      font: 400 1rem "Inter", sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    `;

export default GlobalStyles;
