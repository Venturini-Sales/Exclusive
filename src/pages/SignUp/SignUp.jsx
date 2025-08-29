import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IMG from '../../assets/images/Phoneimage.png';
import FormComponent from '../../components/Form/FormComponent';
import Button from '../../components/Button/Button';
import { PageSection, PageStyle } from './styles';
import useSignUp from './useSignUp';

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
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSignup,
    handleQuickLogin,
    handleGoToLogin,
  } = useSignUp();

  return (
    <ThemeProvider theme={theme}>
      <PageStyle>
        <PageSection
          justifycontent="flex-start"
          width="60%"
          className="responsiveImageSettings"
        >
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

            <Button type="submit" buttonText="Criar conta" />
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p>
              <span onClick={handleQuickLogin}>Login Rápido</span> para
              desenvolvedores
            </p>
            <p>
              Já tem uma conta? <span onClick={handleGoToLogin}>Entrar</span>
            </p>
          </FormComponent>
        </PageSection>
      </PageStyle>
    </ThemeProvider>
  );
};
  