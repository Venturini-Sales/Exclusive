import { Skeleton } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import SliderMain from '../../components/SliderMain/SliderMain';
import { PageSection, PageStyle, WishlistPageHeader } from './Styles';
import useHome from '../Home/useHome';

export const WishlistPage = () => {
  const { products } = useHome();
  return (
    <>
      <PageStyle>
        <WishlistPageHeader>
          <div>
            Wishlist <span>(?)</span>
          </div>
          <button>Colocar todos no carrinho</button>
        </WishlistPageHeader>
        <PageSection>
          {products.slice(8, 24).map((product) => (
            <div
              key={product.id}
              style={{ marginBottom: '10px', marginTop: '10px' }}
            >
              <ProductCard
                title={product.title}
                price={product.price}
                discountPercentage={null}
                rating={product.rating}
                thumbnail={product.thumbnail}
              />
            </div>
          ))}
        </PageSection>
      </PageStyle>
    </>
  );
};
