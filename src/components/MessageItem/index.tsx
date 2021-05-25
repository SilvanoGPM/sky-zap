import React, { useState, useEffect } from 'react';
import { Line, Item, Text, Date as DateDiv } from './styles';

type Timestamp = {
  seconds: number;
};

type Data = {
  author: string;
  body: string;
  date: Timestamp;
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
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    if (data.date.seconds > 0) {
      const date = new Date(data.date.seconds * 1000);
      const h = date.getHours();
      const m = date.getMinutes();

      const hours = h < 10 ? `0${h}` : String(h);
      const minutes = m < 10 ? `0${m}` : String(m);

      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <Line className={user.id === data.author ? 'owner' : ''}>
      <Item>
        <Text>{data.body}</Text>
        <DateDiv>{time}</DateDiv>
      </Item>
    </Line>
  );
};

export default MessageItem;
