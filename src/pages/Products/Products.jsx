import {
  PageStyle,
  ProductArea,
  ProductInfoArea,
  ProductInfoBottom,
  ProductInfoTop,
  ProductPhotoArea,
  ProductPrice,
  ProductPriceOriginal,
  ProductPricePromo,
  ProductPromoPercent,
  ProductReviewArea,
  ProductReviewCount,
  ProductSynopsis,
  ProductTitle,
  RelatedItemsArea,
  RelatedItemsContainer,
  ReturnDeliveryCard,
  ReturnIcon,
  ReturnText,
  ReturnTextArea,
  ReturnTitle,
  WishButton,
} from './styles';
import RatingStars from '../../components/RatingStars/RatingStars';
import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  fetchProductById,
  fetchProductsByCategory,
} from '../../services/productService';
import { Skeleton, Box } from '@mui/material';

export const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const hasPromo = location.state?.hasPromo ?? false;

  useEffect(() => {
    async function loadProductAndRelated() {
      setLoading(true);
      const { response: productData, statusCode } = await fetchProductById(id);
      if (statusCode === 200) {
        setProduct(productData);

        const category = productData.category;
        const { response: categoryProducts, statusCode: catStatus } =
          await fetchProductsByCategory(category);
        if (catStatus === 200) {
          const currentId = Number(productData.id);
          const filtered = categoryProducts.filter(
            (p) => Number(p.id) !== currentId,
          );

          const shuffled = filtered.sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, 4);

          setRelatedProducts(selected);
        }
      }
      setLoading(false);
    }
    loadProductAndRelated();
  }, [id]);

  if (loading)
    return (
      <PageStyle>
        <ProductArea>
          <ProductPhotoArea>
            <Skeleton variant="rectangular" width={500} height={500} />
          </ProductPhotoArea>
          <ProductInfoArea>
            <ProductInfoTop>
              <Skeleton variant="text" width="60%" height={40} />
              <ProductReviewArea>
                <Skeleton variant="text" width={100} height={30} />
              </ProductReviewArea>
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="rectangular" width="100%" height={80} />
            </ProductInfoTop>
            <ProductInfoBottom>
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rectangular" width={120} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
            </ProductInfoBottom>
            <ReturnDeliveryCard>
              <ReturnIcon>
                <Skeleton variant="circular" width={40} height={40} />
              </ReturnIcon>
              <ReturnTextArea>
                <Skeleton variant="text" width={200} height={30} />
                <Skeleton variant="text" width={250} height={20} />
              </ReturnTextArea>
            </ReturnDeliveryCard>
          </ProductInfoArea>
        </ProductArea>
        <RelatedItemsArea>
          <SectionTitle subTitleText="Produtos Relacionados" />
          <RelatedItemsContainer>
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                sx={{ marginBottom: '10px', marginTop: '10px', width: 210 }}
              >
                <Skeleton variant="rectangular" width={210} height={318} />
              </Box>
            ))}
          </RelatedItemsContainer>
        </RelatedItemsArea>
      </PageStyle>
    );

  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <PageStyle>
      <ProductArea>
        <ProductPhotoArea>
          <img src={product.thumbnail} alt={product.title} />
        </ProductPhotoArea>
        <ProductInfoArea>
          <ProductInfoTop>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductReviewArea>
              <RatingStars maxStars={5} rating={product.rating} />
              <ProductReviewCount>
                {product.reviews?.length ?? 0} Reviews
              </ProductReviewCount>
            </ProductReviewArea>
            <ProductPrice>
              {hasPromo ? (
                <>
                  <ProductPriceOriginal
                    style={{ textDecoration: 'line-through' }}
                  >
                    R${product.price.toFixed(2)}
                  </ProductPriceOriginal>
                  <ProductPricePromo>
                    R$
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </ProductPricePromo>
                  <ProductPromoPercent>
                    -{Math.round(product.discountPercentage)}%
                  </ProductPromoPercent>
                </>
              ) : (
                <ProductPriceOriginal>
                  R${product.price.toFixed(2)}
                </ProductPriceOriginal>
              )}
            </ProductPrice>

            <ProductSynopsis>{product.description}</ProductSynopsis>
          </ProductInfoTop>
          <ProductInfoBottom>
            <Counter />
            <Button buttonText="Comprar" />
            <WishButton>
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                style={{ color: '#000000' }}
              />
            </WishButton>
          </ProductInfoBottom>
          <ReturnDeliveryCard>
            <ReturnIcon>
              <FontAwesomeIcon
                icon={faRotateLeft}
                size="2xl"
                style={{ color: '#000000' }}
              />
            </ReturnIcon>
            <ReturnTextArea>
              <ReturnTitle>Devolução de Produto</ReturnTitle>
              <ReturnText>
                Recebemos sua devolução dentro de 30 dias.
              </ReturnText>
            </ReturnTextArea>
          </ReturnDeliveryCard>
        </ProductInfoArea>
      </ProductArea>
      <RelatedItemsArea>
        <SectionTitle subTitleText="Produtos Relacionados" />
        <RelatedItemsContainer>
          {relatedProducts.map((p) => (
            <div key={p.id}>
              <Link
                to={`/product/${p.id}`}
                key={p.id}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ProductCard
                  title={p.title}
                  price={p.price}
                  discountPercentage={null}
                  rating={p.rating}
                  thumbnail={p.thumbnail}
                />
              </Link>
            </div>
          ))}
        </RelatedItemsContainer>
      </RelatedItemsArea>
    </PageStyle>
  );
};
