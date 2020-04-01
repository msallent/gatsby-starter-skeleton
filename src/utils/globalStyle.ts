import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    display: block;
    text-decoration: none;
    color: currentColor;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    &:focus,
    &:active {
      outline: none;
    }
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  blockquote {
    margin: 0;
    padding: 0;
  }

  cite {
    display: block;
    font-style: normal;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  input,
  select {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: inherit;
    border: none;
    border-radius: 0;

    &:focus,
    &:active {
      outline: none;
    }
  }
`;
