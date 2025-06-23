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
} from './styles';
import IMG from '../../assets/images/PhoneImage.png';

export const BillingPage = () => {
  return (
    <PageStyle>
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
          <div>
            <div>
              <input type="radio" />
            </div>
            <div>aa</div>
          </div>
          <div>
            <div>
              <input type="radio" />
            </div>
            <div>aa</div>
          </div>
        </ProductArea>
      </BillingArea>
    </PageStyle>
  );
};
