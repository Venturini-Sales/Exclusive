import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import IMG from '../../assets/images/Phoneimage.png';
import FormComponent from '../../components/Form/FormComponent';
import Button from '../../components/Button/Button';
import { PageSection, PageStyle } from './styles';
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

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { signup, quickLogin } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const res = signup(name, email, password);
    if (res) {
      setError(res);
    } else {
      navigate('/login');
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
            title="Crie a sua conta aqui"
            subTitle="Insira seus dados abaixo"
            onSubmit={handleSignup}
          >
            <TextField
              label="Nome"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              InputLabelProps={{ required: false }}
            />

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

            <Button buttonText="Criar conta" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>
              <span
                onClick={() => {
                  quickLogin();
                  navigate('/');
                }}
              >
                Login Rapido
              </span>{' '}
              para desenvolvedores
            </p>
            <p>
              Já tem uma conta?{' '}
              <span onClick={() => navigate('/login')}>Entrar</span>
            </p>
          </FormComponent>
        </PageSection>
      </PageStyle>
    </ThemeProvider>
  );
};
