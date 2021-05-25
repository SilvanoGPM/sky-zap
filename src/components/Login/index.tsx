import React from 'react';
import firebase from 'firebase/app';
import { FcGoogle } from 'react-icons/fc';

import api from 'api';

import { Container, GlobalStyle, GoogleButton } from './styles';

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
    <>
      <GlobalStyle />
      <Container>
        <GoogleButton type="button" onClick={handleGoogleLogin}>
          <FcGoogle />
          Logar pelo Google
        </GoogleButton>
      </Container>
    </>
  );
};

export default Login;
