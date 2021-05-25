import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import firebase from 'firebase/app';
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md';

import api from 'api';
import Login from 'components/Login';
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
  id: string;
  name: string;
  avatar: string;
};

type Timestamp = {
  seconds: number;
};

type Chat = {
  chatId: string | undefined;
  title: string | undefined;
  image: string | undefined;
  with: string | undefined;
  lastMessage: string | undefined;
  lastMessageDate: Timestamp;
};

const App: React.FC = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);

  const [activeChat, setActiveChat] = useState<Chat>({
    chatId: undefined,
    title: undefined,
    image: undefined,
    lastMessage: undefined,
    with: undefined,
    lastMessageDate: { seconds: 0 },
  });

  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    avatar: '',
  });

  const [showNewChat, setShowNewChat] = useState<boolean>(false);

  useEffect(() => {
    if (user.id) {
      const unsub = api.onChatList(user.id, setChatList);
      return unsub;
    }

    // eslint-disable-next-line
    return () => {};
  }, [user]);

  const handleChatListClick = (chat: Chat) => () => {
    setActiveChat(chat);
  };

  const handleShowNewChat = (): void => {
    setShowNewChat(true);
  };

  const handleLoginData = async (
    userLogged: firebase.User | null
  ): Promise<void> => {
    if (userLogged) {
      const newUser = {
        id: userLogged.uid,
        avatar: userLogged.photoURL || 'images/avatar.jpg',
        name: userLogged.displayName || 'Não identificado',
      };

      await api.addUser(newUser);
      setUser(newUser);
    }
  };

  if (!user.id) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <>
      <GlobalStyle />

      <Container>
        <Sidebar>
          <NewChat
            show={showNewChat}
            setShow={setShowNewChat}
            user={user}
            chatList={chatList}
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
              <li key={uuid()}>
                <ChatListItem
                  onClick={handleChatListClick(chat)}
                  data={chat}
                  active={chat.chatId === activeChat.chatId}
                />
              </li>
            ))}
          </ChatList>
        </Sidebar>

        <ContentArea>
          {activeChat.chatId !== undefined ? (
            <ChatWindow user={user} data={activeChat} />
          ) : (
            <ChatIntro />
          )}
        </ContentArea>
      </Container>
    </>
  );
};

export default App;
