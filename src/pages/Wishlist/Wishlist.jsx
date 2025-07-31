import { Skeleton } from '@mui/material';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PageSection, PageStyle, WishlistPageHeader } from './Styles';
import useHome from '../Home/useHome';

export const WishlistPage = () => {
  const { products } = useHome();
  return (
    <>
      <PageStyle>
        <WishlistPageHeader>
          <SectionTitle subTitleText="Lista de Desejos" />
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
