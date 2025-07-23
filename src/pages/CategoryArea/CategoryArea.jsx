import ProductCard from '../../components/ProductCard/ProductCard';
import useHome from '../Home/useHome';
import { PageSection, PageStyle, WishlistPageHeader } from './styles';

export const CategoryPage = () => {
  const { products } = useHome();

  return (
    <>
      <PageStyle>
        <WishlistPageHeader>
          <div>Produtos</div>
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
