import React from 'react';

import { Container, FirstMessage, Image, SecondMessage } from './styles';

const ChatIntro: React.FC = () => {
  return (
    <Container>
      <Image src="images/intro-image.jpg" alt="Intro Message" />
      <FirstMessage>Mantenha seu celular conectado</FirstMessage>
      <SecondMessage>
        O SkyZap conecta ao seu telefone para sincronizar suas mensagens. <br />
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </SecondMessage>
    </Container>
  );
};

export default ChatIntro;
