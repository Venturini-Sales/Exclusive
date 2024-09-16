import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../lib/productService';
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
import { Skeleton } from '@mui/material';
import {
  AltCardArea,
  BannerCategory,
  BannerImg,
  BannerText,
  BannerTitle,
  ButtonArea,
  ListElementStyle,
  ListStyle,
  PageSection,
  PageStyle,
  SectionTitleArea,
  SlideStyle,
} from './styles';
import {
  faMobileScreen,
  faTruckFast,
  faHeadset,
  faHandHoldingDollar,
  faLaptop,
  faTablet,
  faHeadphonesSimple,
  faClock,
  faBaseballBatBall,
} from '@fortawesome/free-solid-svg-icons';

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const { response, statusCode } = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const dataSections = [
    'Moda feminina',
    'Moda Masculina',
    'Eletronicos',
    'Casa e Bem-Estar',
    'Alimentação',
    'Esportes e Atividades',
    'Fragâncias',
    'Acessórios eletronicos',
  ];

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
            {[...Array(5)].map((_, index) => (
              <SlideStyle key={index}>
                <img src={IMG} alt={`Slide ${index + 1}`} />
              </SlideStyle>
            ))}
          </SliderAlt>
        </PageSection>
        <PageSection paddingtop="0">
          <SectionTitleArea>
            <SectionTitle titleText="Vendas Relampago" subTitleText="Hoje" />
            <FlashPromoCounter />
          </SectionTitleArea>
          <SliderMain rowsType="1">
            {loading
              ? [...Array(8)].map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    animation="wave"
                    width={210}
                    height={318}
                  />
                ))
              : products.slice(0, 8).map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      title={product.title}
                      price={product.price}
                      discountPercentage={product.discountPercentage}
                      rating={product.rating}
                      thumbnail={product.thumbnail}
                      margin="10px"
                    />
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
            <CategoryCard iconChildren={faLaptop} text="Laptops" />
            <CategoryCard iconChildren={faClock} text="Relogios Masculinos" />
            <CategoryCard iconChildren={faTablet} text="Tablets" />
            <CategoryCard
              iconChildren={faHeadphonesSimple}
              text="Acessórios de Celular"
            />
            <CategoryCard
              iconChildren={faBaseballBatBall}
              text="Acessórios Esportivos"
            />
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
            {loading
              ? [...Array(16)].map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width={210}
                    height={318}
                    style={{ margin: '25px' }}
                  />
                ))
              : products.slice(8, 50).map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      margin="25px"
                      title={product.title}
                      price={product.price}
                      discountPercentage={null}
                      rating={product.rating}
                      thumbnail={product.thumbnail}
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
