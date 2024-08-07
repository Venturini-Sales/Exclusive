import {
  ErroPage,
  ErroSubTitle,
  ErroTitle,
  PageLabel,
  PageLabelArea,
  PageStyle,
} from './styles';
import Button from '../../components/Button/Button';

export const NotFound = () => {
  return (
    <PageStyle>
      <PageLabelArea>
        <PageLabel>Inicio</PageLabel>
        <PageLabel>/</PageLabel>
        <PageLabel color="black">404 Error</PageLabel>
      </PageLabelArea>
      <ErroPage>
        <ErroTitle>ERRO 404</ErroTitle>
        <ErroSubTitle>
          Página não encontrada. Volte para a página inicial.
        </ErroSubTitle>
        <Button buttonText="Voltar para pagina inicial" />
      </ErroPage>
    </PageStyle>
  );
};
