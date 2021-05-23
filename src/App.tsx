import React, { useState } from 'react';
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md';

import NewChat from 'components/NewChat';
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

  const [showNewChat, setShowNewChat] = useState<boolean>(false);

  const handleChatListClick = (chat: Chat) => () => {
    setActiveChat(chat);
  };

  const handleShowNewChat = (): void => {
    setShowNewChat(true);
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Sidebar>
          <NewChat
            show={showNewChat}
            setShow={setShowNewChat}
            // user={user}
            // chatList={chatList}
          />
          <Header>
            <Avatar width={40} height={40} src={user.avatar} />
            <ButtonsGroup>
              <IconButton>
                <MdDonutLarge />
              </IconButton>

              <IconButton onClick={handleShowNewChat}>
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
