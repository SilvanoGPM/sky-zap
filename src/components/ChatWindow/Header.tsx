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

type HeaderProps = {
  title: string | undefined;
  image: string | undefined;
};

const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  image,
}: HeaderProps) => (
  <Header>
    <HeaderInfo>
      <Avatar src={image} />
      <Name>{title}</Name>
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
