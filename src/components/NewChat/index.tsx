import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
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

// type Chat = {
//   id: number;
// };

// type User = {
//   id: number;
// };

type NewChatProps = {
  show: boolean;
  // chatList: Chat[];
  // user: User;
  setShow: (show: boolean) => void;
};

const NewChat: React.FC<NewChatProps> = ({ show, setShow }: NewChatProps) => {
  const [list] = useState([
    { id: 123, avatar: 'images/avatar.jpg', name: 'Silvano Marques' },
    { id: 1234, avatar: 'images/avatar.jpg', name: 'Silvano Marques' },
    { id: 1235, avatar: 'images/avatar.jpg', name: 'Silvano Marques' },
  ]);

  const handleHiddenNewChat = (): void => {
    setShow(false);
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
          <Item key={item.id}>
            <Avatar height={40} width={40} src={item.avatar} />
            <Name>{item.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default NewChat;
