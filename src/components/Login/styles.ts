import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dddddd;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoogleButton = styled.button`
  border: 1px solid #dddddd;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.4);
  outline: none;
  cursor: pointer;
  width: 300px;
  padding: 10px 25px;
  color: #222;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;

  svg {
    font-size: 35px;
  }
`;
