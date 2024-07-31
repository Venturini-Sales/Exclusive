import { useNavigate } from 'react-router-dom';
import SliderAlt from '../../components/SliderAlt/SliderAlt';
import SliderMain from '../../components/SliderMain/SliderMain';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FlashPromoCounter from '../../components/FlashPromo/FlashPromoCounter';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import IMG from '../../assets/images/Frame.png';
import Button from '../../components/Button/Button';
import {
  AltCardArea,
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
  const ProductsToListAlt = [1, 2, 3, 4];

  const RandomRatingStars = (max) => {
    return Math.floor(Math.random() * max);
  };
  const navigate = useNavigate();
  return (
    <>
      <PageStyle>
        <PageSection flexdirection="row">
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
        <PageSection>
          <SectionTitleArea>
            <SectionTitle titleText="Vendas Relampago" subTitleText="Hoje" />
            <FlashPromoCounter />
          </SectionTitleArea>
          <SliderMain>
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
        <PageSection paddingtop="100px" bordertop="1px solid #b2b2b2">
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

        <PageSection paddingtop="100px" bordertop="1px solid #b2b2b2">
          <SectionTitleArea justifycontent="space-between">
            <SectionTitle
              titleText="Produtos mais vendidos"
              subTitleText="Este mês  "
            />
            <Button
              buttonText={'Ver tudo'}
              onClick={() => navigate('/login')}
            />
          </SectionTitleArea>
          <CardArea>
            {ProductsToListAlt.map((value, index) => (
              <div key={index}>
                <ProductCard ratingCount={RandomRatingStars(100)} />
              </div>
            ))}
          </CardArea>
        </PageSection>
      </PageStyle>
    </>
  );
};
