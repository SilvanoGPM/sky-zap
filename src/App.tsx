import React from 'react';
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md';

import { GlobalStyle } from './globalStyles';
import {
  Container,
  Sidebar,
  Header,
  Avatar,
  ButtonsGroup,
  IconButton,
  Search,
  SearchInput,
} from './styles';

const App: React.FC = () => {
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

          <Search>
            <SearchInput>
              <MdSearch />
              <input
                type="search"
                placeholder="Procurar ou começar uma nova conversa"
              />
            </SearchInput>
          </Search>

          <div>ChatList</div>
        </Sidebar>
        <div>Contéudo</div>
      </Container>
    </>
  );
};

export default App;
