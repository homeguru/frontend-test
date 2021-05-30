import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: #292830;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto','Arial', sans-serif;
    font-size: 16px;
  }
  div{
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: black;
  }
  p {
    margin: 0;
  }
  .bold{
    font-weight: bold;
  }
  a{
    cursor:pointer;
  }

`;