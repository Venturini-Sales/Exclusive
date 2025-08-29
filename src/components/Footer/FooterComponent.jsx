import { useNavigate } from 'react-router-dom';
import {
  AccountSection,
  Footer,
  NewsletterSection,
  ShortcutSection,
  SupportSection,
  TitleH3,
  TitleNewH3,
  ListStyle,
  ListElementStyle,
} from './styles';

function FooterComponent() {
  const navigate = useNavigate();

  return (
    <Footer>
      <NewsletterSection>
        <TitleNewH3 fontSize="24px">Exclusive</TitleNewH3>
        <p onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>
          Inscreva-se
        </p>
        <p>Frete grátis em pedidos com o Cupom FG2025!</p>
      </NewsletterSection>

      <SupportSection>
        <ListStyle>
          <ListElementStyle>
            <TitleH3>Suporte</TitleH3>
          </ListElementStyle>
          <ListElementStyle>
            <p style={{ userSelect: 'text', cursor: 'auto' }}>
              Rua Borba Gato 125, Bandeirantes - Nova Iguaçu - RJ / 26286-330
            </p>
          </ListElementStyle>
          <ListElementStyle>
            <p style={{ userSelect: 'text', cursor: 'auto' }}>
              jpventurinisales@gmail.com
            </p>
          </ListElementStyle>
          <ListElementStyle>
            <p style={{ userSelect: 'text', cursor: 'auto' }}>
              +55 21 9 7891-5683
            </p>
          </ListElementStyle>
        </ListStyle>
      </SupportSection>

      <AccountSection>
        <ListStyle>
          <ListElementStyle>
            <TitleH3>Conta</TitleH3>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/account')}>Minha conta</p>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/signup')}>Logar / Cadastrar</p>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/cart')}>Carrinho</p>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/wishlist')}>Lista de desejo</p>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/productscategory')}>Comprar</p>
          </ListElementStyle>
        </ListStyle>
      </AccountSection>

      <ShortcutSection>
        <ListStyle>
          <ListElementStyle>
            <TitleH3>Atalho</TitleH3>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/contact')}>Contato</p>
          </ListElementStyle>
          <ListElementStyle>
            <p onClick={() => navigate('/aboutus')}>Sobre</p>
          </ListElementStyle>
        </ListStyle>
      </ShortcutSection>
    </Footer>
  );
}

export default FooterComponent;
