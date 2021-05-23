import styled from 'styled-components';

import DefaultAvatar from 'ui/Avatar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Avatar = styled(DefaultAvatar)`
  margin: 0 15px;
  width: 40px;
  height: 40px;
`;

export const Name = styled.div`
  font-size: 17px;
  color: var(--black);
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const IconButton = styled.div`
  width: 40px;
  height: 40px;
  font-size: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-100);
  transition: width ease-in-out 0.15s;

  &.isHidden {
    width: 0;
  }
`;

export const Body = styled.section`
  flex: 1;
  overflow-y: auto;
  background-color: var(--white-400);
  background-position: 50vw;
  background-image: url('images/background.webp');
  padding: 20px 30px;
`;

export const EmojiArea = styled.div`
  overflow: hidden;
  height: 0;
  transition: height ease-in-out 0.3s;

  &.isOpen {
    height: 200px;
  }
`;

export const Footer = styled.footer`
  height: 62px;
  display: flex;
  align-items: center;
`;

export const InputArea = styled.div`
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 20px;
  background: var(--white);
  color: var(--gray-300);
  font-size: 15px;
  padding-left: 15px;
`;

export const Actions = styled.div`
  display: flex;
  margin: 0 15px;
`;
