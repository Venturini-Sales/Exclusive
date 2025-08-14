import { useNavigate } from 'react-router-dom';
import { StyledBand } from './styles';

function BandComponent() {
  const navigate = useNavigate();

  return (
    <StyledBand>
      <div>
        Promoção de frete expresso gratís para todos os produtos - Use o Cupom
        FG2025!
        <span onClick={() => navigate('/productscategory')}>Compre agora</span>
      </div>
    </StyledBand>
  );
}

export default BandComponent;
