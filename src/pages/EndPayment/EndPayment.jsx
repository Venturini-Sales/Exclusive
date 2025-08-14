import { EndIcon, EndIconArea, PageSection, PageStyle } from './styles';
import EmptyBuy from '../../assets/images/emptybuy.svg';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export const EndPaymentPage = () => {
  const navigate = useNavigate();

  return (
    <PageStyle>
      <PageSection>
        <EndIconArea>
          <EndIcon>
            <img src={EmptyBuy} alt="Empty List" />
          </EndIcon>
          <p>Sua compra foi finalizada. Volte para a página inicial.</p>
        </EndIconArea>
        <Button
          buttonText="Voltar para pagina inicial"
          onClick={() => navigate('/')}
        />
      </PageSection>
    </PageStyle>
  );
};
