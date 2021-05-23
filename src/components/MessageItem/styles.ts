import styled from 'styled-components';

export const Line = styled.div`
  margin-bottom: 10px;
  display: flex;

  &.owner {
    justify-content: flex-end;
  }
`;

export const Item = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 1px 1px var(--gray);
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 90%;

  ${Line}.owner & {
    background-color: var(--green-100);
  }
`;

export const Text = styled.div`
  font-size: 14px;
  margin: 5px 50px 5px 5px;
`;

export const Date = styled.div`
  --height: 15px;
  font-size: 11px;
  color: var(--gray-100);
  margin-right: 5px;
  text-align: right;
  height: var(--height);
  margin-top: calc(var(--height) * -1);
`;
