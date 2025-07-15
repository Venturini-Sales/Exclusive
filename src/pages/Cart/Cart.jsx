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
} from './styles';
import IMG from '../../assets/images/PhoneImage.png';
import Button from '../../components/Button/Button';

export const CartPage = () => {
  return (
    <>
      <PageStyle>
        <ProductInfoContainer>
          <ContainerItensText>Produto</ContainerItensText>
          <ContainerItensText>Preço</ContainerItensText>
          <ContainerItensText>Quantidade</ContainerItensText>
          <ContainerItensText>Subtotal</ContainerItensText>
        </ProductInfoContainer>

        <ProductsAreaContainer>
          <ProductsInfo>
            <ProductMainInfo>
              <img src={IMG} alt="" />
              <p>Celular Teste 123</p>
            </ProductMainInfo>
            <ContainerItensText>$650</ContainerItensText>
            <ItemQuantityContainer>
              <NumberInput defaultValue="1" min="1" max="99" />
            </ItemQuantityContainer>
            <ContainerItensText>$650</ContainerItensText>
          </ProductsInfo>
          <ProductsInfo>
            <ProductMainInfo>
              <img src={IMG} alt="" />
              <p>Celular Teste 123</p>
            </ProductMainInfo>
            <ContainerItensText>$650</ContainerItensText>
            <ItemQuantityContainer>
              <NumberInput defaultValue="1" min="1" max="99" />
            </ItemQuantityContainer>
            <ContainerItensText>$650</ContainerItensText>
          </ProductsInfo>
        </ProductsAreaContainer>

        <UtilityButtonsArea>
          <button>Continuar Comprando</button>
          <button>Atualizar Carrinho</button>
        </UtilityButtonsArea>

        <PaymentSegmentArea>
          <CupomArea>
            <CupomInputArea>
              <CupomInput type="text" placeholder="Código de Desconto" />
            </CupomInputArea>
            <Button buttonText="Aplicar Cupom" />
          </CupomArea>
          <CartContainer>
            <CartInfo>
              <CartTitle>Valor Total</CartTitle>
              <PricesLabel>
                <p>Subtotal</p>
                <p>$1300</p>
              </PricesLabel>
              <PricesLabel>
                <p>Frete</p>
                <p>$20</p>
              </PricesLabel>
              <PricesLabel borderbottom="none">
                <p>Total</p>
                <p>$1320</p>
              </PricesLabel>
            </CartInfo>
            <Button buttonText="Prosseguir Compra" />
          </CartContainer>
        </PaymentSegmentArea>
      </PageStyle>
    </>
  );
};
