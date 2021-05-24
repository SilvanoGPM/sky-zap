import React from 'react';
import firebase from 'firebase/app';

import api from 'api';

import { Container } from './styles';

type LoginProps = {
  onReceive: (user: firebase.User | null) => Promise<void>;
};

const Login: React.FC<LoginProps> = ({ onReceive }: LoginProps) => {
  const handleGoogleLogin = async (): Promise<void> => {
    const result = await api.googlePopup();
    if (result) {
      onReceive(result.user);
    } else {
      // eslint-disable-next-line
      alert('Aconteceu um erro!!');
    }
  };

  return (
    <Container>
      <button type="button" onClick={handleGoogleLogin}>
        Logar pelo Google
      </button>
    </Container>
  );
};

export default Login;
