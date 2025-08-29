import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {
  CategoryOptions,
  CategoryPageHeader,
  CategorySelection,
  NumbersArea,
  PageSection,
  PageStyle,
  SectionsNumberArea,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import useCategoryArea from './useCategoryArea';

export const CategoryPage = ({ handleEyeClick }) => {
  const {
    isHoveredLeft,
    setIsHoveredLeft,
    isHoveredRight,
    setIsHoveredRight,
    loading,
    selectedCategory,
    handleCategoryChange,
    currentProducts,
    totalPages,
    currentPage,
    goToPage,
    isPromoProduct,
    skeletonCount,
  } = useCategoryArea();

  return (
    <PageStyle>
      <CategoryPageHeader>
        <SectionTitle subTitleText="Produtos" />
        <CategorySelection
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <CategoryOptions value="">Todos</CategoryOptions>
          <CategoryOptions value="promoção">
            Produtos em Promoção
          </CategoryOptions>
          <CategoryOptions value="smartphones">Smartphones</CategoryOptions>
          <CategoryOptions value="tablets">Tablets</CategoryOptions>
          <CategoryOptions value="laptops">Notebooks</CategoryOptions>
          <CategoryOptions value="beauty">Produtos de Beleza</CategoryOptions>
          <CategoryOptions value="fragrances">Perfumes</CategoryOptions>
          <CategoryOptions value="furniture">Móveis</CategoryOptions>
          <CategoryOptions value="home-decoration">Decorações</CategoryOptions>
          <CategoryOptions value="kitchen-accessories">
            Acessórios de Cozinha
          </CategoryOptions>
          <CategoryOptions value="mobile-accessories">
            Acessórios de Celular
          </CategoryOptions>
          <CategoryOptions value="mens-shirts">
            Roupas Masculinas
          </CategoryOptions>
          <CategoryOptions value="mens-shoes">
            Sapatos Masculinos
          </CategoryOptions>
          <CategoryOptions value="mens-watches">
            Relógios Masculinos
          </CategoryOptions>
          <CategoryOptions value="sports-accessories">
            Acessórios Esportivos
          </CategoryOptions>
          <CategoryOptions value="womens-dresses">
            Roupas Femininas
          </CategoryOptions>
          <CategoryOptions value="womens-watches">
            Relógios Femininos
          </CategoryOptions>
          <CategoryOptions value="womens-shoes">
            Sapatos Femininos
          </CategoryOptions>
          <CategoryOptions value="womens-bags">
            Bolsas Femininas
          </CategoryOptions>
          <CategoryOptions value="womens-jewellery">
            Joias Femininas
          </CategoryOptions>
          <CategoryOptions value="sunglasses">Óculos</CategoryOptions>
          <CategoryOptions value="skin-care">Cuidados Pessoais</CategoryOptions>
        </CategorySelection>
      </CategoryPageHeader>

      <PageSection>
        {loading
          ? [...Array(skeletonCount)].map((_, index) => (
              <div
                key={index}
                style={{ marginBottom: '10px', marginTop: '10px' }}
              >
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={270}
                  height={354}
                />
              </div>
            ))
          : currentProducts.map((product) => {
              const promo = isPromoProduct(product);

              return (
                <div
                  key={product.id}
                  style={{ marginBottom: '10px', marginTop: '10px' }}
                >
                  <Link
                    to={`/product/${product.id}`}
                    state={{ hasPromo: promo }}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      discountPercentage={
                        promo ? product.discountPercentage : null
                      }
                      rating={product.rating}
                      thumbnail={product.thumbnail}
                      onEyeClick={handleEyeClick}
                    />
                  </Link>
                </div>
              );
            })}
      </PageSection>

      {totalPages > 1 && (
        <SectionsNumberArea>
          <div>
            <FontAwesomeIcon
              onMouseEnter={() => setIsHoveredLeft(true)}
              onMouseLeave={() => setIsHoveredLeft(false)}
              onClick={() => goToPage(currentPage - 1)}
              style={{
                color: isHoveredLeft ? '#DB4444' : '#999999',
                cursor: 'pointer',
              }}
              size="xl"
              icon={faCaretLeft}
            />
          </div>

          <div>
            {[...Array(totalPages)].map((_, index) => (
              <NumbersArea
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                style={{
                  margin: '0 5px',
                  cursor: 'pointer',
                  fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                  color: currentPage === index + 1 ? '#DB4444' : '#999999',
                }}
              >
                {index + 1}
              </NumbersArea>
            ))}
          </div>

          <div>
            <FontAwesomeIcon
              onMouseEnter={() => setIsHoveredRight(true)}
              onMouseLeave={() => setIsHoveredRight(false)}
              onClick={() => goToPage(currentPage + 1)}
              style={{
                color: isHoveredRight ? '#DB4444' : '#999999',
                cursor: 'pointer',
              }}
              size="xl"
              icon={faCaretRight}
            />
          </div>
        </SectionsNumberArea>
      )}
    </PageStyle>
  );
};
