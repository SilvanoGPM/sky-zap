import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white:       #ece5dd;
    --gray:        #dddddd;
    --gray-medium: #f6f6f6;
    --gray-dark:   #919191;
    --blue:        #34b7f1;
    --green-100:   #dcf8c6;
    --green-200:   #25d366;
    --green-300:   #128c7e;
    --green-400:   #075e54;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--white);
    font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial;
  }

`;
