import IMG from '../../assets/images/Phoneimage.png';
import FormComponent from '../../components/Form/FormComponent';
import FormButton from '../../components/FormButton/FormButton';
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
  return (
    <ThemeProvider theme={theme}>
      <PageStyle>
        <PageSection width="60%">
          <img src={IMG} alt="" />
        </PageSection>

        <PageSection width="40%">
          <FormComponent
            title="Faça login no Exclusive"
            subTitle="Insira seus dados abaixo"
          >
            <TextField
              id="standard-basic"
              label="Email ou Numero de Telefone"
              variant="standard"
            />

            <TextField id="standard-basic" label="Senha" variant="standard" />

            <ButtonFormArea>
              <FormButton buttonText="Entrar" />
              <p>
                <a href="">Esqueceu sua senha?</a>
              </p>
            </ButtonFormArea>
          </FormComponent>
        </PageSection>
      </PageStyle>
    </ThemeProvider>
  );
};
