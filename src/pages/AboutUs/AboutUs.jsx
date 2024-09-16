import {
  AboutArea,
  AboutText,
  AboutTitle,
  PageStyle,
  StyledImg,
} from './styles';
import IMG from '../../assets/images/Aboutusimage.png';

export const AboutUsPage = () => {
  return (
    <PageStyle>
      <AboutArea>
        <AboutTitle>Nossa Historia</AboutTitle>
        <AboutText>
          Lançada em 2015, a Exclusive é o principal marketplace de compras
          online do sul da Ásia, com presença ativa em Bangladesh. Com o suporte
          de uma ampla gama de soluções personalizadas de marketing, dados e
          serviços, a Exclusive conta com 10.500 vendedores e 300 marcas,
          atendendo 3 milhões de clientes em toda a região.
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
    </PageStyle>
  );
};
