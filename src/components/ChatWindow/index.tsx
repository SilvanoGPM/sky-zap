import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import EmojiPicker, { IEmojiData } from 'emoji-picker-react';

import MessageItem from 'components/MessageItem';
import Header from './Header';
import Footer from './Footer';

import { Body, Container, EmojiArea } from './styles';

type ChatWindowProps = {
  user: User;
};

type User = {
  id: number;
  name: string;
  avatar: string;
};

type Message = {
  author: number;
  body: string;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ user }: ChatWindowProps) => {
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [chat] = useState<Message[]>([
    { author: 123, body: 'Bla bla' },
    { author: 123, body: 'Bla bla Bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
    { author: 1234, body: 'Bla bla Bla bla Bla bla Bla bla' },
  ]);
  const input = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = body;

    if (!current) return;

    if (current.scrollHeight > current.offsetHeight) {
      current.scrollTop = current.scrollHeight - current.offsetHeight;
    }
  }, [chat]);

  const handleEmojiClick = (event: MouseEvent, { emoji }: IEmojiData): void => {
    const { current } = input;

    if (current === null) return;

    const cursorStart = current.selectionStart || 0;
    const cursorEnd = current.selectionEnd || 0;
    const cursor = cursorEnd - cursorStart;

    const cursorIsStopped = cursor === 0;
    const newMessage = cursorIsStopped
      ? // Insere o emoji na posição que o cursor está.
        message.substring(0, cursorStart) +
        emoji +
        message.substring(cursorStart)
      : // Substitui o texto selecionado pelo emoji
        message.replace(message.substring(cursorStart, cursorEnd), emoji);

    setMessage(newMessage);
  };

  const handleOpenEmoji = (): void => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = (): void => {
    setEmojiOpen(false);
  };

  return (
    <Container>
      <Header />

      <Body ref={body}>
        {chat.map((item) => (
          <MessageItem key={item.author} data={item} user={user} />
        ))}
      </Body>

      <EmojiArea className={emojiOpen ? 'isOpen' : ''}>
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
          pickerStyle={{ width: 'auto' }}
        />
      </EmojiArea>

      <Footer
        inputRef={input}
        emojiOpen={emojiOpen}
        message={message}
        setMessage={setMessage}
        handleOpenEmoji={handleOpenEmoji}
        handleCloseEmoji={handleCloseEmoji}
      />
    </Container>
  );
};

export default ChatWindow;
