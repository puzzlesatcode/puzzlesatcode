import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-red-50: #e01e37;
    --color-red-100: #da1e37;
    --color-red-200: #c71f37;
    --color-red-300: #bd1f36;
    --color-red-400: #b21e35;
    --color-red-500: #a71e34;
    --color-red-600: #a11d33;
    --color-red-700: #85182a;
    --color-red-800: #6e1423;
    --color-red-900: #641220;
    --color-orange-50: #ffb600;
    --color-orange-100: #ffaa00;
    --color-orange-200: #ff9e00;
    --color-orange-300: #ff9100;
    --color-orange-400: #ff8500;
    --color-orange-500: #ff7900;
    --color-orange-600: #ff6d00;
    --color-orange-700: #ff6000;
    --color-orange-800: #ff5400;
    --color-orange-900: #ff4800;
    --color-brown-50:  #ffedd8;
    --color-brown-100: #f3d5b5;
    --color-brown-200: #e7bc91;
    --color-brown-300: #d4a276;
    --color-brown-400: #bc8a5f;
    --color-brown-500: #a47148;
    --color-brown-600: #8b5e34;
    --color-brown-700: #6f4518;
    --color-brown-800: #603808;
    --color-brown-900: #583101;
    --color-yellow-50: #fffae5;
    --color-yellow-100: #fff6cc;
    --color-yellow-200: #fff2b2;
    --color-yellow-300: #ffee99;
    --color-yellow-400: #ffe97f;
    --color-yellow-500: #ffe566;
    --color-yellow-600: #ffe14c;
    --color-yellow-700: #ffdd32;
    --color-yellow-800: #ffd819;
    --color-yellow-900: #ffd400;
    --color-green-50: #d8f3dc;
    --color-green-100: #b7e4c7;
    --color-green-200: #95d5b2;
    --color-green-300: #74c69d;
    --color-green-400: #52b788;
    --color-green-500: #40916c;
    --color-green-600: #2d6a4f;
    --color-green-700: #1b4332;
    --color-green-800: #1a2923;
    --color-green-900: #081c15;
    --color-turquoise-50: #80ffdb;
    --color-turquoise-100: #72efdd;
    --color-turquoise-200: #64dfdf;
    --color-turquoise-300: #56cfe1;
    --color-turquoise-400: #48bfe3;
    --color-turquoise-500: #4ea8de;
    --color-turquoise-600: #5390d9;
    --color-turquoise-700: #5e60ce;
    --color-turquoise-800: #6930c3;
    --color-turquoise-900: #7400b8;
    --color-blue-50: #a9d6e5;
    --color-blue-100: #89c2d9;
    --color-blue-200: #61a5c2;
    --color-blue-300: #468faf;
    --color-blue-400: #2c7da0;
    --color-blue-500: #2a6f97;
    --color-blue-600: #014f86;
    --color-blue-700: #01497c;
    --color-blue-800: #013a63;
    --color-blue-900: #012a4a;
    --color-violet-50: #dec9e9;
    --color-violet-100: #dac3e8;
    --color-violet-200: #d2b7e5;
    --color-violet-300: #c19ee0;
    --color-violet-400: #b185db;
    --color-violet-500: #a06cd5;
    --color-violet-600: #9163cb;
    --color-violet-700: #815ac0;
    --color-violet-800: #7251b5;
    --color-violet-900: #6247aa;
    --color-pink-50: #fae0e4;
    --color-pink-100: #f7cad0;
    --color-pink-200: #f9bec7;
    --color-pink-300: #fbb1bd;
    --color-pink-400: #ff99ac;
    --color-pink-500: #ff85a1;
    --color-pink-600: #ff7096;
    --color-pink-700: #ff5c8a;
    --color-pink-800: #ff477e;
    --color-pink-900: #ff0a54;
    --color-gray-50: #f8f9fa;
    --color-gray-100: #e9ecef;
    --color-gray-200: #dee2e6;
    --color-gray-300: #ced4da;
    --color-gray-400: #adb5bd;
    --color-gray-500: #6c757d;
    --color-gray-600: #495057;
    --color-gray-700: #343a40;
    --color-gray-800: #212529;
    --color-gray-900: #111111;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background-color: var(--color-gray-50);
    font-size: 87.5%; // 14px

    @media only screen and (min-width: 768px) {
      font-size: 75%; // 12px
    }

    @media only screen and (min-width: 1080px) {
      font-size: 62.5%; // 10px
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  p,
  a,
  span,
  button,
  strong,
  input,
  textarea,
  select,
  option {
    font-family: 'Glory', sans-serif;
  }
`
