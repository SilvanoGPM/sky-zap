import React, { FormEvent, KeyboardEvent, Ref } from 'react';
import { MdInsertEmoticon, MdClose, MdSend, MdMic } from 'react-icons/md';

import { Footer, IconButton, Actions, InputArea, Input } from './styles';

type FooterComponentProps = {
  inputRef: Ref<HTMLInputElement> | null;
  emojiOpen: boolean;
  message: string;
  setMessage: (message: string) => void;
  onKeyUp: (event: KeyboardEvent) => void;
  handleOpenEmoji: () => void;
  handleCloseEmoji: () => void;
  handleSendClick: () => void;
};

const FooterComponent: React.FC<FooterComponentProps> = ({
  inputRef,
  emojiOpen,
  message,
  setMessage,
  handleOpenEmoji,
  handleCloseEmoji,
  handleSendClick,
  onKeyUp,
}: FooterComponentProps) => {
  const handleMessageChange = (event: FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  return (
    <Footer>
      <Actions>
        <IconButton
          onClick={handleCloseEmoji}
          className={!emojiOpen ? 'isHidden' : ''}
        >
          <MdClose />
        </IconButton>
        <IconButton onClick={handleOpenEmoji}>
          <MdInsertEmoticon
            color={emojiOpen ? 'var(--green-300)' : 'inherit'}
          />
        </IconButton>
      </Actions>

      <InputArea>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Digite uma mensagem"
          value={message}
          onChange={handleMessageChange}
          onKeyUp={onKeyUp}
        />
      </InputArea>

      <Actions>
        {message === '' ? (
          <IconButton>
            <MdMic />
          </IconButton>
        ) : (
          <IconButton onClick={handleSendClick}>
            <MdSend />
          </IconButton>
        )}
      </Actions>
    </Footer>
  );
};

export default FooterComponent;
