import SliderAlt from '../../components/SliderAlt/SliderAlt';
import SliderMain from '../../components/SliderMain/SliderMain';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {
  ListElementStyle,
  ListStyle,
  PageSection,
  PageStyle,
  SlideStyle,
} from './styles';
import IMG from '../../assets/images/Frame.png';

export const HomePage = () => {
  const dataSections = [
    'Moda feminina',
    'Moda Masculina',
    'Eletronicos',
    'Casa e Bem-Estar',
    'Medicina',
    'Esportes e Atividades',
    'Bebês e Brinquedos',
    'Saúde e Beleza',
  ];

  return (
    <>
      <PageStyle>
        <PageSection>
          <ListStyle>
            {dataSections.map((value, index) => (
              <ListElementStyle key={index}>{value}</ListElementStyle>
            ))}
          </ListStyle>
          <SliderAlt>
            <SlideStyle>
              <img src={IMG} />
            </SlideStyle>
            <SlideStyle>
              <img src={IMG} />
            </SlideStyle>
            <SlideStyle>
              <img src={IMG} />
            </SlideStyle>
            <SlideStyle>
              <img src={IMG} />
            </SlideStyle>
            <SlideStyle>
              <img src={IMG} />
            </SlideStyle>
          </SliderAlt>
        </PageSection>
        <PageSection borderbottom="1px solid #b2b2b2" flexdirection="column">
          <SectionTitle titleText="Vendas Relampago" subTitleText="Hoje" />
          <SliderMain>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </SliderMain>
        </PageSection>
      </PageStyle>
    </>
  );
};
