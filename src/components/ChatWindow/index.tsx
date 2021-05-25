import React, {
  useState,
  useEffect,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { v4 as uuid } from 'uuid';
import EmojiPicker, { IEmojiData } from 'emoji-picker-react';

import api from 'api';
import MessageItem from 'components/MessageItem';
import Header from './Header';
import Footer from './Footer';

import { Body, Container, EmojiArea } from './styles';

type User = {
  id: string;
  name: string;
  avatar: string;
};

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

type ChatWindowProps = {
  user: User;
  data: Chat;
};

type Message = {
  author: string;
  body: string;
  date: Timestamp;
};

const ChatWindow: React.FC<ChatWindowProps> = ({
  user,
  data,
}: ChatWindowProps) => {
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [chat, setChat] = useState<Message[]>([]);
  const [users, setUsers] = useState<string[]>([]);

  const input = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChat([]);
    const unsub = api.onChatContent(data.chatId || '', setChat, setUsers);
    return unsub;
  }, [data.chatId]);

  useEffect(() => {
    const { current } = body;

    if (!current) return;

    if (current.scrollHeight > current.offsetHeight) {
      current.scrollTop = current.scrollHeight - current.offsetHeight;
    }
  }, [chat]);

  const handleSendClick = (): void => {
    if (message) {
      api.sendMessage(data, user.id, message, users);
      setMessage('');
      setEmojiOpen(false);
    }
  };

  const handleInputKeyUp = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

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
      <Header title={data.title} image={data.image} />

      <Body ref={body}>
        {chat.map((item) => (
          <MessageItem key={uuid()} data={item} user={user} />
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
        onKeyUp={handleInputKeyUp}
      />
    </Container>
  );
};

export default ChatWindow;
