import { useNavigate } from 'react-router-dom';
import {
  AccountSection,
  Footer,
  NewsletterSection,
  ShortcutSection,
  StyledEmailInput,
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
        <p>Inscreva-se</p>
        <p>10% de desconto no seu primeiro pedido</p>
        <StyledEmailInput>
          <input type="text" placeholder="Ensira seu email" />
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91196 10H2.99996L1.02296 2.13505C1.0103 2.08934 1.00259 2.0424 0.999959 1.99505C0.977959 1.27405 1.77196 0.774048 2.45996 1.10405L21 10L2.45996 18.896C1.77996 19.223 0.995959 18.737 0.999959 18.029C1.00198 17.9658 1.0131 17.9031 1.03296 17.843L2.49996 13"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledEmailInput>
      </NewsletterSection>

      <SupportSection>
        <ListStyle>
          <ListElementStyle>
            <TitleH3>Suporte</TitleH3>
          </ListElementStyle>
          <ListElementStyle>
            <p style={{ userSelect: 'text' }}>
              Rua Borba Gato 125, Bandeirantes - Nova Iguaçu - RJ / 26286-330
            </p>
          </ListElementStyle>
          <ListElementStyle>
            <p style={{ userSelect: 'text' }}>jpventurinisales@gmail.com</p>
          </ListElementStyle>
          <ListElementStyle>
            <p style={{ userSelect: 'text' }}>+55 21 9 7891-5683</p>
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
