// src/GlobalStyle.js
import { Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={`
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif; /* Add your preferred font here */
      }
    `}
  />
);

export default GlobalStyle;
