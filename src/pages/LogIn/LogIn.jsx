import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import IMG from '../../assets/images/Phoneimage.png';
import FormComponent from '../../components/Form/FormComponent';
import Button from '../../components/Button/Button';
import { ButtonFormArea, PageSection, PageStyle } from './styles';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#999999',
    },
    background: {
      default: '#999999',
    },
  },
});

export const LogInPage = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const res = signin(email, password);
    if (res) {
      setError(res);
    } else {
      navigate('/');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <PageStyle>
        <PageSection justifycontent="flex-start" width="60%">
          <img src={IMG} alt="" />
        </PageSection>

        <PageSection width="40%">
          <FormComponent
            title="Faça login no Exclusive"
            subTitle="Insira seus dados abaixo"
            onSubmit={handleLogin}
          >
            <TextField
              label="Email ou Número de Telefone"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ required: false }}
            />

            <TextField
              label="Senha"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{ required: false }}
            />

            <ButtonFormArea>
              <Button type="submit" buttonText="Entrar" />
              <p>
                <a
                  href=""
                  onClick={() => {
                    navigate('/signup');
                  }}
                >
                  Ainda não tem conta?
                </a>
              </p>
            </ButtonFormArea>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </FormComponent>
        </PageSection>
      </PageStyle>
    </ThemeProvider>
  );
};
