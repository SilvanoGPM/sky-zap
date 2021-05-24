import React, { useState } from 'react';
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

type Chat = {
  id: number | undefined;
  title: string | undefined;
  image: string | undefined;
};

const App: React.FC = () => {
  const [chatList] = useState<Chat[]>([]);

  const [activeChat, setActiveChat] = useState<Chat>({
    id: undefined,
    title: undefined,
    image: undefined,
  });

  const [user, setUser] = useState<User>({
    id: 'DuxV8fyHizbZgCOlwjROc4ClJQl1',
    name: 'Silvano Pimentel',
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GimIRatkcGJQyx0OTlNARYkK8pi923UqmgbvQpR1w=s96-c',
  });

  const [showNewChat, setShowNewChat] = useState<boolean>(false);

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
