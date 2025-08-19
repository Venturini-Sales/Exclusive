import { useState } from 'react';
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
} from './styles';
import EmptyCart from '../../assets/images/emptycart.svg';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CartPage = () => {
  const { user, updateCartQuantity, removeFromCart } = useAuth();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState('');
  const [isFreteGratis, setIsFreteGratis] = useState(false);

  const cartItems = user?.cart || [];
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const frete = isFreteGratis ? 0 : cartItems.length > 0 ? 20 : 0;
  const total = subtotal + frete;

  return (
    <PageStyle>
      {cartItems.length > 0 && (
        <ProductInfoContainer>
          <ContainerItensText>Produto</ContainerItensText>
          <ContainerItensText>Preço</ContainerItensText>
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

              <ContainerItensText>R${item.price.toFixed(2)}</ContainerItensText>

              <ItemQuantityContainer>
                <NumberInput
                  type="number"
                  value={item.quantity}
                  min="0"
                  max="99"
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10) || 0;
                    if (newQuantity <= 0) {
                      removeFromCart(item.id);
                    } else {
                      updateCartQuantity(item.id, newQuantity);
                    }
                  }}
                />
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
              <Button
                buttonText="Aplicar Cupom"
                onClick={() => {
                  if (coupon.toUpperCase() === 'FG2025') {
                    setIsFreteGratis(true);
                    toast.success('Cupom aplicado! Frete grátis ativado.');
                  } else {
                    setIsFreteGratis(false);
                    toast.error('Cupom inválido.');
                  }
                }}
              />
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
