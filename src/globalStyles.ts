import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white:       #ffffff;
    --white-100:   #f6f6f6;
    --white-200:   #eeeeee;
    --white-300:   #ece5dd;
    --white-400:   #ededed;
    --gray:        #dddddd;
    --gray-100:    #919191;
    --gray-200:    #777777;
    --gray-300:    #525252;
    --blue:        #34b7f1;
    --green-100:   #dcf8c6;
    --green-200:   #4adf83;
    --green-300:   #128c7e;
    --green-400:   #075e54;
    --black:       #000000;
  }

  *,
  *::before,
  *::after {
    --scrollbar-color: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-color: var(--scrollbar-color) var(--scrollbar-color);

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-color);
    }
  }

  body {
    background-color: var(--white-300);
    font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial;
  }

`;
