import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Container,
  LastMessage,
  LastMessageDate,
  Line,
  Lines,
  Name,
} from './styles';

type Timestamp = {
  seconds: number;
};

type Chat = {
  chatId: string | undefined;
  title: string | undefined;
  image: string | undefined;
  lastMessage: string | undefined;
  lastMessageDate: Timestamp;
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
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    if (data?.lastMessageDate?.seconds > 0) {
      const date = new Date(data.lastMessageDate.seconds * 1000);
      const h = date.getHours();
      const m = date.getMinutes();

      const hours = h < 10 ? `0${h}` : String(h);
      const minutes = m < 10 ? `0${m}` : String(m);

      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <Container onClick={onClick} className={active ? 'active' : ''}>
      <Avatar src={data.image} alt="Avatar" />
      <Lines>
        <Line>
          <Name>{data.title}</Name>
          <LastMessageDate>{time}</LastMessageDate>
        </Line>
        <Line>
          <LastMessage>
            <p>{data.lastMessage}</p>
          </LastMessage>
        </Line>
      </Lines>
    </Container>
  );
};

export default ChatListItem;
