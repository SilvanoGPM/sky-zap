import React, { useState } from 'react';
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md';

import ChatListItem from 'components/ChatListItem';
import ChatIntro from 'components/ChatIntro';
import ChatWindow from 'components/ChatWindow';
import Avatar from 'ui/Avatar';

import { GlobalStyle } from './globalStyles';
import {
  Container,
  Sidebar,
  Header,
  ButtonsGroup,
  IconButton,
  SearchContainer,
  Search,
  Input,
  ChatList,
  ContentArea,
} from './styles';

type User = {
  id: number;
  name: string;
  avatar: string;
};

type Chat = {
  id: number | undefined;
  title: string | undefined;
  image: string | undefined;
};

const App: React.FC = () => {
  const [chatList] = useState<Chat[]>([
    { id: 1, title: 'SeuVano', image: 'images/avatar.jpg' },
    { id: 2, title: 'NossoVano', image: 'images/avatar.jpg' },
    { id: 3, title: 'VossoVano', image: 'images/avatar.jpg' },
  ]);

  const [activeChat, setActiveChat] = useState<Chat>({
    id: undefined,
    title: undefined,
    image: undefined,
  });

  const [user] = useState<User>({
    id: 1234,
    avatar: 'images/avatar.jpg',
    name: 'Silvano Marques',
  });

  const handleChatListClick = (chat: Chat) => () => {
    setActiveChat(chat);
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Sidebar>
          <Header>
            <Avatar width={40} height={40} src={user.avatar} />
            <ButtonsGroup>
              <IconButton>
                <MdDonutLarge />
              </IconButton>

              <IconButton>
                <MdChat />
              </IconButton>

              <IconButton>
                <MdMoreVert />
              </IconButton>
            </ButtonsGroup>
          </Header>

          <SearchContainer>
            <Search>
              <MdSearch />
              <Input
                type="search"
                placeholder="Pesquisar ou começar uma nova conversa"
              />
            </Search>
          </SearchContainer>

          <ChatList>
            {chatList.map((chat) => (
              <li key={chat.id}>
                <ChatListItem
                  onClick={handleChatListClick(chat)}
                  data={chat}
                  active={chat.id === activeChat.id}
                />
              </li>
            ))}
          </ChatList>
        </Sidebar>

        <ContentArea>
          {activeChat.id !== undefined ? (
            <ChatWindow user={user} />
          ) : (
            <ChatIntro />
          )}
        </ContentArea>
      </Container>
    </>
  );
};

export default App;
