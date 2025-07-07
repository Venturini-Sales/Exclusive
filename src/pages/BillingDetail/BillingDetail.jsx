import {
  BillingArea,
  InputArea,
  PageStyle,
  PageTitle,
  PageTitleArea,
  ProductArea,
  StyledInput,
  InputTotalArea,
  ProductsDetail,
  ProductDetailArea,
  ProductDetailInfo,
  ProductImage,
  ProductName,
  ProductPrice,
  FullPriceArea,
  PriceContainer,
  PageContainer,
  SelectRadioArea,
  RadioArea,
  RadioInput,
  RadioLabel,
  CupomTotalArea,
  CupomInputArea,
  CupomInput,
  BuyButtonArea,
} from './styles';
import IMG from '../../assets/images/PhoneImage.png';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

export const BillingPage = () => {
  return (
    <PageStyle>
      <PageContainer>
        <PageTitleArea>
          <PageTitle>Informações de Cobrança</PageTitle>
        </PageTitleArea>
        <BillingArea>
          <InputArea>
            <InputTotalArea>
              <p>Nome</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Nome da Empresa</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Endereço</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Apartamento, andar, casa, etc. (Opcional)</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Cidade</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Telefone</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Email</p>
              <StyledInput>
                <input type="text" />
              </StyledInput>
            </InputTotalArea>
          </InputArea>
          <ProductArea>
            <ProductsDetail>
              <ProductDetailArea>
                <ProductDetailInfo>
                  <ProductImage src={IMG} />
                  <ProductName>Celular Teste 123</ProductName>
                </ProductDetailInfo>
                <ProductPrice>
                  <span>R$</span>650
                </ProductPrice>
              </ProductDetailArea>
              <ProductDetailArea>
                <ProductDetailInfo>
                  <ProductImage src={IMG} />
                  <ProductName>Celular Teste 123</ProductName>
                </ProductDetailInfo>
                <ProductPrice>
                  <span>R$</span>650
                </ProductPrice>
              </ProductDetailArea>
              <FullPriceArea>
                <PriceContainer>
                  <div>Subtotal</div>
                  <div>
                    <span>R$</span>650
                  </div>
                </PriceContainer>
                <PriceContainer>
                  <div>Frete</div>
                  <div>
                    <span>R$</span>20
                  </div>
                </PriceContainer>
                <PriceContainer bordertop="none">
                  <div>Total</div>
                  <div>
                    <span>R$</span>670
                  </div>
                </PriceContainer>
              </FullPriceArea>
            </ProductsDetail>
            <SelectRadioArea>
              <RadioArea>
                <RadioInput id="credit" name="PaymentType" type="radio" />
                <RadioLabel htmlFor="credit">Cartão de Crédito</RadioLabel>
              </RadioArea>
              <FontAwesomeIcon
                size="2xl"
                icon={faPaypal}
                style={{ color: '#2c8ab7' }}
              />
            </SelectRadioArea>
            <SelectRadioArea>
              <RadioArea>
                <RadioInput id="cash" name="PaymentType" type="radio" />
                <RadioLabel htmlFor="cash">Dinheiro na entrega</RadioLabel>
              </RadioArea>
            </SelectRadioArea>
            <CupomTotalArea>
              <CupomInputArea>
                <CupomInput type="text" placeholder="Código de Desconto" />
              </CupomInputArea>
              <Button buttonText="Aplicar Cupom" />
            </CupomTotalArea>
            <BuyButtonArea>
              <Button buttonText="Finalizar Compra" />
            </BuyButtonArea>
          </ProductArea>
        </BillingArea>
      </PageContainer>
    </PageStyle>
  );
};
