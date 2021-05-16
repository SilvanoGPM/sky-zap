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

const ChatListItem: React.FC = () => {
  return (
    <Container>
      <Avatar src="images/avatar.jpg" alt="Avatar" />
      <Lines>
        <Line>
          <Name>Silvano Marques</Name>
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
