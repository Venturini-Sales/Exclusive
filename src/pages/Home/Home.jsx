import { useNavigate } from 'react-router-dom';
import SliderAlt from '../../components/SliderAlt/SliderAlt';
import SliderMain from '../../components/SliderMain/SliderMain';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FlashPromoCounter from '../../components/FlashPromo/FlashPromoCounter';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import IMG from '../../assets/images/Frame.png';
import JBLImg from '../../assets/images/JBLbanner.png';
import Button from '../../components/Button/Button';
import InfoCard from '../../components/InfoCard/InfoCard';
import {
  AltCardArea,
  BannerCategory,
  BannerImg,
  BannerText,
  BannerTitle,
  ButtonArea,
  CardArea,
  ListElementStyle,
  ListStyle,
  PageSection,
  PageStyle,
  SectionTitleArea,
  SlideStyle,
} from './styles';
import {
  faMobileScreen,
  faDisplay,
  faCamera,
  faHeadphones,
  faGamepad,
  faKeyboard,
  faTruckFast,
  faHeadset,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';

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

  const ProductsToList = [1, 2, 3, 4, 5, 6, 7, 8];
  const ProductsToList2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

  const RandomRatingStars = (max) => {
    return Math.floor(Math.random() * max);
  };
  const navigate = useNavigate();
  return (
    <>
      <PageStyle>
        <PageSection paddingtop="0" flexdirection="row">
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
        <PageSection paddingtop="0">
          <SectionTitleArea>
            <SectionTitle titleText="Vendas Relampago" subTitleText="Hoje" />
            <FlashPromoCounter />
          </SectionTitleArea>
          <SliderMain rowsType="1">
            {ProductsToList.map((value, index) => (
              <div key={index}>
                <ProductCard ratingCount={RandomRatingStars(100)} />
              </div>
            ))}
          </SliderMain>
        </PageSection>
        <ButtonArea>
          <Button buttonText={'Ver mais'} onClick={() => navigate('/login')} />
        </ButtonArea>
        <PageSection bordertop="1px solid #b2b2b2">
          <SectionTitleArea>
            <SectionTitle
              titleText="Navegar por Categorias"
              subTitleText="Categorias"
            />
          </SectionTitleArea>
          <AltCardArea>
            <CategoryCard iconChildren={faMobileScreen} text="Celulares" />
            <CategoryCard iconChildren={faDisplay} text="Computadores" />
            <CategoryCard iconChildren={faKeyboard} text="Teclados" />
            <CategoryCard iconChildren={faCamera} text="Cameras" />
            <CategoryCard iconChildren={faHeadphones} text="Fones" />
            <CategoryCard iconChildren={faGamepad} text="Jogos" />
          </AltCardArea>
        </PageSection>
        <ButtonArea>
          <Button buttonText={'Ver mais'} onClick={() => navigate('/login')} />
        </ButtonArea>
        <PageSection position="relative" paddingtop="0">
          <BannerImg src={JBLImg} alt="" />
          <BannerCategory>Categorias</BannerCategory>
          <BannerTitle>Aprimore Sua Experiência Musical</BannerTitle>
          <BannerText>Compre agora!</BannerText>
        </PageSection>
        <PageSection paddingtop="0">
          <SectionTitleArea>
            <SectionTitle
              titleText="Conheça Nossos Produtos"
              subTitleText="Nossos Produtos"
            />
          </SectionTitleArea>
          <SliderMain overflow="hidden" rowsType="2">
            {ProductsToList2.map((value, index) => (
              <div key={index}>
                <ProductCard
                  margin="25px"
                  ratingCount={RandomRatingStars(100)}
                />
              </div>
            ))}
          </SliderMain>
        </PageSection>
        <ButtonArea>
          <Button buttonText={'Ver mais'} onClick={() => navigate('/login')} />
        </ButtonArea>
        <PageSection
          paddingtop="20px"
          flexdirection="row"
          justifycontent="space-between"
        >
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
        </PageSection>
      </PageStyle>
    </>
  );
};
