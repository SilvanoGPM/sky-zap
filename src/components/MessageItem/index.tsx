import React from 'react';
import { Line, Item, Text, Date } from './styles';

type Data = {
  author: string;
  body: string;
};

type User = {
  id: string;
};

type MessageItemProps = {
  data: Data;
  user: User;
};

const MessageItem: React.FC<MessageItemProps> = ({
  data,
  user,
}: MessageItemProps) => {
  return (
    <Line className={user.id === data.author ? 'owner' : ''}>
      <Item>
        <Text>{data.body}</Text>
        <Date>03:00</Date>
      </Item>
    </Line>
  );
};

export default MessageItem;