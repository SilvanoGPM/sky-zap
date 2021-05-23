import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: -100%;
  top: 0;
  bottom: 0;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--gray);
  transition: left 0.25s ease-in-out;

  &.show {
    left: 0;
    transition: left 0.35s ease-in-out;
  }
`;

export const Header = styled.div`
  background-color: var(--green-300);
  display: flex;
  align-items: center;
  padding: 60px 15px 15px 15px;
`;

export const BackButton = styled.div`
  color: var(--white);
  height: 40px;
  width: 40px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.div`
  --height: 40px;
  color: var(--white);
  font-size: 19px;
  height: var(--height);
  line-height: var(--height);
  flex: 1;
  margin-left: 20px;
`;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--white-100);
  }
`;

export const Name = styled.div`
  margin-left: 15px;
  font-size: 17px;
  color: var(--black);
`;
