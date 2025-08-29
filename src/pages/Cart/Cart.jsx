import {
  ContainerItensText,
  PageStyle,
  ProductInfoContainer,
  ProductsInfo,
  ProductsAreaContainer,
  ProductMainInfo,
  ItemQuantityContainer,
  NumberInput,
  UtilityButtonsArea,
  PaymentSegmentArea,
  CupomArea,
  CupomInputArea,
  CupomInput,
  CartContainer,
  CartInfo,
  CartTitle,
  PricesLabel,
  CartIconArea,
  CartIcon,
  ResponsiveArrows,
} from './styles';
import EmptyCart from '../../assets/images/emptycart.svg';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import useCart from './useCart';

export const CartPage = () => {
  const {
    cartItems,
    coupon,
    setCoupon,
    subtotal,
    frete,
    total,
    applyCoupon,
    incrementQuantity,
    decrementQuantity,
    changeQuantity,
    isFreteGratis,
  } = useCart();

  const navigate = useNavigate();

  return (
    <PageStyle>
      {cartItems.length > 0 && (
        <ProductInfoContainer>
          <ContainerItensText>Produto</ContainerItensText>
          <ContainerItensText className="subTotalResponsive">
            Preço
          </ContainerItensText>
          <ContainerItensText>Quantidade</ContainerItensText>
          <ContainerItensText>Subtotal</ContainerItensText>
        </ProductInfoContainer>
      )}

      <ProductsAreaContainer>
        {cartItems.length === 0 ? (
          <CartIconArea>
            <CartIcon>
              <img src={EmptyCart} alt="Empty List" />
            </CartIcon>
            <p>Seu carrinho está vazio.</p>
          </CartIconArea>
        ) : (
          cartItems.map((item) => (
            <ProductsInfo key={item.id}>
              <ProductMainInfo>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <p style={{ width: '80px', textAlign: 'center' }}>
                  {item.title.length > 20
                    ? `${item.title.slice(0, 20)}...`
                    : item.title}
                </p>
              </ProductMainInfo>

              <ContainerItensText className="subTotalResponsive">
                R${item.price.toFixed(2)}
              </ContainerItensText>

              <ItemQuantityContainer>
                <ResponsiveArrows>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ color: '#000000', cursor: 'pointer' }}
                    onClick={() => incrementQuantity(item.id, item.quantity)}
                  />
                </ResponsiveArrows>
                <NumberInput
                  type="number"
                  value={item.quantity}
                  min="0"
                  max="99"
                  onChange={(e) => changeQuantity(item.id, e.target.value)}
                />
                <ResponsiveArrows>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ color: '#000000', cursor: 'pointer' }}
                    onClick={() => decrementQuantity(item.id, item.quantity)}
                  />
                </ResponsiveArrows>
              </ItemQuantityContainer>

              <ContainerItensText>
                R${(item.price * item.quantity).toFixed(2)}
              </ContainerItensText>
            </ProductsInfo>
          ))
        )}
      </ProductsAreaContainer>

      {cartItems.length > 0 && (
        <>
          <UtilityButtonsArea>
            <button onClick={() => navigate('/productscategory')}>
              Continuar Comprando
            </button>
          </UtilityButtonsArea>

          <PaymentSegmentArea>
            <CupomArea>
              <CupomInputArea>
                <CupomInput
                  type="text"
                  placeholder="Código de Desconto"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
              </CupomInputArea>
              <Button buttonText="Aplicar Cupom" onClick={applyCoupon} />
            </CupomArea>

            <CartContainer>
              <CartInfo>
                <CartTitle>Valor Total</CartTitle>
                <PricesLabel>
                  <p>Subtotal</p>
                  <p>R${subtotal.toFixed(2)}</p>
                </PricesLabel>
                <PricesLabel>
                  <p>Frete</p>
                  <p>R${frete.toFixed(2)}</p>
                </PricesLabel>
                <PricesLabel borderbottom="none">
                  <p>Total</p>
                  <p>R${total.toFixed(2)}</p>
                </PricesLabel>
              </CartInfo>
              <Button
                buttonText="Prosseguir Compra"
                onClick={() => {
                  navigate('/payment', {
                    state: {
                      cartItems,
                      subtotal,
                      frete,
                      total,
                      isFreteGratis,
                    },
                  });
                }}
              />
            </CartContainer>
          </PaymentSegmentArea>
        </>
      )}
    </PageStyle>
  );
};
