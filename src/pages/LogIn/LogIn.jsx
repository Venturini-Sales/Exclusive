import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IMG from '../../assets/images/Phoneimage.png';
import FormComponent from '../../components/Form/FormComponent';
import Button from '../../components/Button/Button';
import { ButtonFormArea, PageSection, PageStyle } from './styles';
import useLogIn from './useLogIn';

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
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
    goToSignUp,
  } = useLogIn();

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
                <a href="#" onClick={goToSignUp}>
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
