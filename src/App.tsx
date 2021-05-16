import React, { useState } from 'react';
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md';

import ChatListItem from 'components/ChatListItem';
import { GlobalStyle } from './globalStyles';
import {
  Container,
  Sidebar,
  Header,
  Avatar,
  ButtonsGroup,
  IconButton,
  SearchContainer,
  Search,
  Input,
  ChatList,
} from './styles';

const App: React.FC = () => {
  const [chatList, setChatList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <>
      <GlobalStyle />

      <Container>
        <Sidebar>
          <Header>
            <Avatar src="images/avatar.jpg" alt="avatar" />
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
            {chatList.map(() => (
              <li key={Date.now()}>
                <ChatListItem />
              </li>
            ))}
          </ChatList>
        </Sidebar>
        <div>Contéudo</div>
      </Container>
    </>
  );
};

export default App;
