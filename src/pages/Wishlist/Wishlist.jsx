import { Link, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProductCard from '../../components/ProductCard/ProductCard';
import EmptyWishlist from '../../assets/images/emptywishlist.svg';
import {
  NumbersArea,
  PageSection,
  PageStyle,
  SectionsNumberArea,
  WishIcon,
  WishIconArea,
  WishlistPageHeader,
} from './styles';
import { useWishlist } from './useWishlist';

export const WishlistPage = ({ handleEyeClick }) => {
  const navigate = useNavigate();
  const {
    wishlistProducts,
    loading,
    currentPage,
    totalPages,
    isHoveredLeft,
    setIsHoveredLeft,
    isHoveredRight,
    setIsHoveredRight,
    currentProducts,
    goToPage,
    handleAddAllToCart,
    isPromoProduct,
  } = useWishlist();

  return (
    <PageStyle>
      <WishlistPageHeader>
        <SectionTitle subTitleText="Lista de Desejos" />
        <button onClick={() => handleAddAllToCart(navigate)}>
          Colocar todos no carrinho
        </button>
      </WishlistPageHeader>

      <PageSection>
        {loading ? (
          [...Array(20)].map((_, index) => (
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
        ) : wishlistProducts.length === 0 ? (
          <WishIconArea>
            <WishIcon>
              <img src={EmptyWishlist} alt="Empty List" />
            </WishIcon>
            <p>Sua lista está vazia.</p>
          </WishIconArea>
        ) : (
          currentProducts.map((product) => {
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
                      promo && product.discountPercentage > 0
                        ? product.discountPercentage
                        : null
                    }
                    rating={product.rating}
                    thumbnail={product.thumbnail}
                    onEyeClick={handleEyeClick}
                  />
                </Link>
              </div>
            );
          })
        )}
      </PageSection>

      {!loading && totalPages > 1 && (
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
