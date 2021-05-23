import React from 'react';
import {
  Avatar,
  Container,
  LastMessage,
  LastMessageDate,
  Line,
  Lines,
  Name,
} from './styles';

type Chat = {
  id: number | undefined;
  title: string | undefined;
  image: string | undefined;
};

type ChatListItemProps = {
  onClick: () => void;
  active: boolean;
  data: Chat;
};

const ChatListItem: React.FC<ChatListItemProps> = ({
  onClick,
  active,
  data,
}: ChatListItemProps) => {
  return (
    <Container onClick={onClick} className={active ? 'active' : ''}>
      <Avatar src={data.image} alt="Avatar" />
      <Lines>
        <Line>
          <Name>{data.title}</Name>
          <LastMessageDate>11:00</LastMessageDate>
        </Line>
        <Line>
          <LastMessage>
            <p>Fazer a atividade de educação física!</p>
          </LastMessage>
        </Line>
      </Lines>
    </Container>
  );
};

export default ChatListItem;
