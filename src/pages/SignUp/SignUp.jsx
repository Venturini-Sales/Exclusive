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
          >
            <TextField id="standard-basic" label="Nome" variant="standard" />

            <TextField
              id="standard-basic"
              label="Email ou Numero de Telefone"
              variant="standard"
            />

            <TextField id="standard-basic" label="Senha" variant="standard" />
            <Button buttonText="Criar conta" />
            <p>
              Já tem uma conta? <a href="">Entrar</a>
            </p>
          </FormComponent>
        </PageSection>
      </PageStyle>
    </ThemeProvider>
  );
};
