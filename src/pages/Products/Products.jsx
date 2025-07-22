import {
  PageStyle,
  ProductArea,
  ProductInfoArea,
  ProductInfoBottom,
  ProductInfoTop,
  ProductPhotoArea,
  ProductPrice,
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
import IMG from '../../assets/images/PhoneImage.png';
import RatingStars from '../../components/RatingStars/RatingStars';
import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useHome from '../Home/useHome';
import ProductCard from '../../components/ProductCard/ProductCard';

export const ProductsPage = () => {
  const { products } = useHome();

  return (
    <PageStyle>
      <ProductArea>
        <ProductPhotoArea>
          <img src={IMG} alt="aaa" />
        </ProductPhotoArea>
        <ProductInfoArea>
          <ProductInfoTop>
            <ProductTitle>Celular Teste 123</ProductTitle>
            <ProductReviewArea>
              <RatingStars maxStars={5} rating={5} />
              <ProductReviewCount>(150 Reviews)</ProductReviewCount>
            </ProductReviewArea>
            <ProductPrice>R$650.00</ProductPrice>
            <ProductSynopsis>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ProductSynopsis>
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
                tyle={{ color: '#000000' }}
              ></FontAwesomeIcon>
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
          {products.slice(8, 12).map((product) => (
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
        </RelatedItemsContainer>
      </RelatedItemsArea>
    </PageStyle>
  );
};
