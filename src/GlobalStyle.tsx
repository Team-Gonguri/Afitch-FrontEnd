import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    
  }
  body{
    font-family: 'Montserrat', sans-serif;
    font-size:16px;
    width: auto;
    min-width: 1440px;
    height: auto;
    min-height: 900px;
    background: #FFFaFa;
  
    a{
    text-decoration: none;
    color:inherit;
    }
  
    h1,h2,h3,h4 {
      display: block;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
   }
  }
`;

export default GlobalStyle;
