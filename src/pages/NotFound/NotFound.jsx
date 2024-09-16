import { ErroPage, ErroSubTitle, ErroTitle, PageStyle } from './styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageStyle>
      <ErroPage>
        <ErroTitle>ERRO 404</ErroTitle>
        <ErroSubTitle>
          Página não encontrada. Volte para a página inicial.
        </ErroSubTitle>
        <Button
          buttonText="Voltar para pagina inicial"
          onClick={() => navigate('/')}
        />
      </ErroPage>
    </PageStyle>
  );
};
