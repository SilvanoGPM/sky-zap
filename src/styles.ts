import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white-400);
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 35%;
  max-width: 415px;

  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--gray);
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ButtonsGroup = styled.div`
  display: flex;
`;

export const IconButton = styled.div`
  color: var(--gray-dark);
  font-size: 1.5rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  background-color: var(--white-100);
  border-bottom: 1px solid var(--white-200);
  padding: 5px 15px;
`;

export const Search = styled.div`
  background-color: var(--white);
  color: var(--gray-dark);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 20px;
`;

export const ChatList = styled.ul`
  --scrollbar-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  background-color: var(--white);
  overflow-y: auto;
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-color);

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
  }
`;

export const ContentArea = styled.div``;
