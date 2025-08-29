import React from 'react';
import { Link } from 'react-router-dom';
import SliderAlt from '../../components/SliderAlt/SliderAlt';
import SliderMain from '../../components/SliderMain/SliderMain';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FlashPromoCounter from '../../components/FlashPromo/FlashPromoCounter';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Slide1 from '../../assets/images/Iphone X.png';
import Slide2 from '../../assets/images/Cozinha.png';
import Slide3 from '../../assets/images/Cadastro.png';
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
  faBaseballBatBall,
  faCouch,
} from '@fortawesome/free-solid-svg-icons';
import useHome from './useHome';

export const HomePage = ({ handleEyeClick }) => {
  const { dataSections, loading, loadProducts, products, navigate } = useHome();
  return (
    <>
      <PageStyle>
        <PageSection
          paddingtop="0"
          flexdirection="row"
          responsiveFlexDirection="column"
          responsiveJustifyContent="center"
        >
          <ListStyle>
            {dataSections.map((item, index) => (
              <ListElementStyle
                key={index}
                onClick={() =>
                  navigate('/productscategory', {
                    state: { category: item.category },
                  })
                }
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </ListElementStyle>
            ))}
          </ListStyle>

          <SliderAlt>
            <SlideStyle
              onClick={() =>
                navigate('/product/124', { state: { hasPromo: true } })
              }
            >
              <img src={Slide1} />
            </SlideStyle>
            <SlideStyle
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'kitchen-accessories' },
                })
              }
            >
              <img src={Slide2} />
            </SlideStyle>
            <SlideStyle onClick={() => navigate('/signup')}>
              <img src={Slide3} />
            </SlideStyle>
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
                    <Link
                      to={`/product/${product.id}`}
                      state={{ hasPromo: product.discountPercentage > 0 }}
                      key={product.id}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <ProductCard
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                        thumbnail={product.thumbnail}
                        onEyeClick={handleEyeClick}
                      />
                    </Link>
                  </div>
                ))}
          </SliderMain>
        </PageSection>
        <ButtonArea>
          <Button
            buttonText={'Ver mais'}
            onClick={() =>
              navigate('/productscategory', {
                state: { category: 'promoção' },
              })
            }
          />
        </ButtonArea>
        <PageSection bordertop="1px solid #b2b2b2">
          <SectionTitleArea>
            <SectionTitle
              titleText="Navegar por Categorias"
              subTitleText="Categorias"
            />
          </SectionTitleArea>
          <AltCardArea>
            <CategoryCard
              iconChildren={faMobileScreen}
              text="Celulares"
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'smartphones' },
                })
              }
            />
            <CategoryCard
              iconChildren={faLaptop}
              text="Laptops"
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'laptops' },
                })
              }
            />
            <CategoryCard
              iconChildren={faCouch}
              text="Móveis"
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'furniture' },
                })
              }
            />
            <CategoryCard
              iconChildren={faTablet}
              text="Tablets"
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'tablets' },
                })
              }
            />
            <CategoryCard
              iconChildren={faHeadphonesSimple}
              text="Acessórios de Celular"
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'mobile-accessories' },
                })
              }
            />
            <CategoryCard
              iconChildren={faBaseballBatBall}
              text="Acessórios Esportivos"
              onClick={() =>
                navigate('/productscategory', {
                  state: { category: 'smartphones' },
                })
              }
            />
          </AltCardArea>
        </PageSection>
        <ButtonArea>
          <Button
            buttonText={'Ver mais'}
            onClick={() => navigate('/productscategory')}
          />
        </ButtonArea>
        <PageSection
          position="relative"
          paddingtop="0"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            navigate('/product/103', { state: { hasPromo: false } })
          }
        >
          <BannerImg src={JBLImg} alt="JBL Banner" />
          <BannerCategory>Apple HomePod</BannerCategory>
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
          <SliderMain overflow="hidden" rowsType="1">
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
              : products.slice(8, 16).map((product) => (
                  <div key={product.id}>
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <ProductCard
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        discountPercentage={null}
                        rating={product.rating}
                        thumbnail={product.thumbnail}
                        onEyeClick={handleEyeClick}
                      />
                    </Link>
                  </div>
                ))}
          </SliderMain>
        </PageSection>
        <ButtonArea>
          <Button
            buttonText={'Ver mais'}
            onClick={() => navigate('/productscategory')}
          />
        </ButtonArea>
        <PageSection
          paddingtop="20px"
          flexdirection="row"
          justifycontent="space-between"
          gap="20px"
          responsiveGap="40px"
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
