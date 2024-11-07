import {
  AboutArea,
  AboutText,
  AboutTitle,
  PageStyle,
  AboutContainer,
  StyledImg,
  EmployerContainer,
  StyledEmployer,
  EmployerInfo,
  EmployerName,
  EmployerRole,
  InfoArea,
} from './styles';
import InfoCard from '../../components/InfoCard/InfoCard';
import IMG from '../../assets/images/Aboutusimage.png';
import Employer1 from '../../assets/images/employer1.png';
import Employer2 from '../../assets/images/employer2.png';
import Employer3 from '../../assets/images/employer3.png';
import {
  faTruckFast,
  faHeadset,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';

export const AboutUsPage = () => {
  return (
    <PageStyle>
      <AboutContainer>
        <AboutArea>
          <AboutTitle>Nossa Historia</AboutTitle>
          <AboutText>
            Lançada em 2015, a Exclusive é o principal marketplace de compras
            online do sul da Ásia, com presença ativa em Bangladesh. Com o
            suporte de uma ampla gama de soluções personalizadas de marketing,
            dados e serviços, a Exclusive conta com 10.500 vendedores e 300
            marcas, atendendo 3 milhões de clientes em toda a região.
          </AboutText>

          <AboutText>
            A Exclusive oferece mais de 1 milhão de produtos e está crescendo
            muito rapidamente. A empresa disponibiliza uma variedade diversa de
            categorias, que vão desde produtos de consumo.
          </AboutText>
        </AboutArea>
        <div>
          <StyledImg src={IMG} alt="" />
        </div>
      </AboutContainer>
      <EmployerContainer>
        <EmployerInfo>
          <StyledEmployer src={Employer1} />
          <EmployerName>Vincent Cortez</EmployerName>
          <EmployerRole>Fundador e Presidente</EmployerRole>
        </EmployerInfo>
        <EmployerInfo>
          <StyledEmployer src={Employer2} />
          <EmployerName>Emilee Steele</EmployerName>
          <EmployerRole>Diretora-Gerente</EmployerRole>
        </EmployerInfo>
        <EmployerInfo>
          <StyledEmployer src={Employer3} />
          <EmployerName>Maurice Clark</EmployerName>
          <EmployerRole>Designer de Produto</EmployerRole>
        </EmployerInfo>
      </EmployerContainer>
      <InfoArea>
        <InfoCard
          iconType={faTruckFast}
          TitleText="Entrega Rápida e Gratuita"
          SubTitleText="Entrega gratuita para todos os pedidos acima de $ 140"
        />
        <InfoCard
          iconType={faHeadset}
          TitleText="Atendimento 24h"
          SubTitleText="Suporte ao cliente amigável 24 horas por dia"
        />
        <InfoCard
          iconType={faHandHoldingDollar}
          TitleText="Garantia de Devolução de Dinheiro"
          SubTitleText="Devolvemos o dinheiro em 30 dias"
        />
      </InfoArea>
    </PageStyle>
  );
};
