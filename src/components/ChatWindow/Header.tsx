import React from 'react';
import { MdSearch, MdAttachFile, MdMoreVert } from 'react-icons/md';

import {
  Avatar,
  Name,
  Header,
  Buttons,
  HeaderInfo,
  IconButton,
} from './styles';

const HeaderComponent: React.FC = () => (
  <Header>
    <HeaderInfo>
      <Avatar src="images/avatar.jpg" />
      <Name>Silvano Marques</Name>
    </HeaderInfo>

    <Buttons>
      <IconButton>
        <MdSearch />
      </IconButton>

      <IconButton>
        <MdAttachFile />
      </IconButton>

      <IconButton>
        <MdMoreVert />
      </IconButton>
    </Buttons>
  </Header>
);

export default HeaderComponent;
