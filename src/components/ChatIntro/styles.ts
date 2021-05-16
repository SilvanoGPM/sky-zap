import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 6px solid var(--green-200);
`;

export const Image = styled.img`
  width: 250px;
  height: auto;
`;

export const FirstMessage = styled.h1`
  margin-top: 30px;
  font-size: 32px;
  font-weight: normal;
  color: var(--gray-300);
`;

export const SecondMessage = styled.h2`
  font-size: 14px;
  color: var(--gray-200);
  font-weight: normal;
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
`;
