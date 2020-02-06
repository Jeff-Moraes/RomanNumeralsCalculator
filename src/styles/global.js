import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body {
    height: 100%;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  body {
    -webkit-font-smoothing: antialiased;

    background: #dae3eb;
    background: linear-gradient(180deg, #eef2f3, #dae3eb);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
