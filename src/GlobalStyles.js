import { styled, createGlobalStyle } from 'styled-components';

import hexrep from './Assets/Images/hexrepeat2.jpg';


export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${hexrep});
    background-repeat: repeat;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight:700;
    text-transform: uppercase;
  }

  h1 {
    font-size:32px;
  }

  h2 {
    font-size:32px;
    margin-top:2rem;
    margin-bottom:1.5rem;
    color:#00abdf;
  }

  h3 {
    font-size: 25px;

  }

  h4 {
    font-size: 22px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 18px;
  }

  p {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  // Common Styles:
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }
`;
