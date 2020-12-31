import { styled, createGlobalStyle } from 'styled-components';

import hexrep from './Assets/Images/hexrepeat2.jpg';


export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${hexrep});
    background-repeat: repeat;
  }
`;
