import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ededed;
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

export const Search = styled.div``;
export const SearchInput = styled.div``;

export const ContentArea = styled.div``;
