import React, { useState, useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';

import api from 'api';
import Avatar from 'ui/Avatar';

import {
  Container,
  Header,
  Title,
  BackButton,
  List,
  Item,
  Name,
} from './styles';

type Chat = {
  chatId: string | undefined;
};

type User = {
  id: string;
  name: string;
  avatar: string;
};

type NewChatProps = {
  show: boolean;
  chatList: Chat[];
  user: User;
  setShow: (show: boolean) => void;
};

const NewChat: React.FC<NewChatProps> = ({
  show,
  user,
  chatList,
  setShow,
}: NewChatProps) => {
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    const getList = async (): Promise<void> => {
      if (user.id) {
        const results = await api.getContactList(user.id);
        setList(results);
      }
    };

    getList();
  }, [user, chatList]);

  const handleHiddenNewChat = (): void => {
    setShow(false);
  };

  const addNewChat = (otherUser: User) => async (): Promise<void> => {
    await api.addNewChat(user, otherUser);
    handleHiddenNewChat();
  };

  return (
    <Container className={show ? 'show' : ''}>
      <Header>
        <BackButton onClick={handleHiddenNewChat}>
          <MdArrowBack />
        </BackButton>
        <Title>Nova Conversa</Title>
      </Header>

      <List>
        {list.map((item) => (
          <Item key={item.id} onClick={addNewChat(item)}>
            <Avatar height={40} width={40} src={item.avatar} />
            <Name>{item.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default NewChat;
