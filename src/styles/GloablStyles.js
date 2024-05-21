import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size:10px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  input {
   border: none;
    outline: none;
  }
  button {
    width: auto;
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
`;
