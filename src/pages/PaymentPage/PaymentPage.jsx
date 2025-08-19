import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
import Button from '../../components/Button/Button';
import IMG from '../../assets/images/PhoneImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { toast } from 'react-toastify';

export const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user, clearCart } = useAuth();

  const {
    cartItems,
    subtotal,
    frete: initialFrete = 20,
    total: initialTotal,
    isFreteGratis = false,
  } = state || {};

  const [paymentType, setPaymentType] = useState('');
  const [formData, setFormData] = useState({
    name: user ? `${user.name} ${user.surname}` : '',
    email: user ? user.email : '',
    address: '',
    city: '',
    phone: '',
  });
  const [coupon, setCoupon] = useState(isFreteGratis ? 'FG2025' : '');
  const [frete, setFrete] = useState(isFreteGratis ? 0 : initialFrete);
  const [total, setTotal] = useState(isFreteGratis ? subtotal : initialTotal);

  if (!cartItems) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === 'FG2025') {
      if (frete === 0) {
        toast.info('Cupom já aplicado!');
        return;
      }
      setFrete(0);
      setTotal(subtotal);
      toast.success('Cupom aplicado! Frete grátis ativado.');
    } else {
      toast.error('Cupom inválido.');
    }
  };

  const handleSubmit = () => {
    if (!paymentType) {
      toast.warning('Escolha um método de pagamento');
      return;
    }

    // valida apenas os campos obrigatórios
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast.warning('Preencha todos os campos obrigatórios');
        return;
      }
    }

    toast.success('Compra finalizada com sucesso!');
    clearCart();
    navigate('/paymentfinished');
  };

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
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Nome da Empresa</p>
              <StyledInput>
                <input type="text" placeholder="Nome da Empresa" />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Endereço</p>
              <StyledInput>
                <input
                  type="text"
                  name="address"
                  placeholder="Endereço"
                  value={formData.address}
                  onChange={handleChange}
                />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Apartamento, andar, casa, etc. (Opcional)</p>
              <StyledInput>
                <input
                  type="text"
                  placeholder="Apartamento, andar, casa, etc. (Opcional)"
                />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Cidade</p>
              <StyledInput>
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  value={formData.city}
                  onChange={handleChange}
                />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Telefone</p>
              <StyledInput>
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </StyledInput>
            </InputTotalArea>
            <InputTotalArea>
              <p>Email</p>
              <StyledInput>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </StyledInput>
            </InputTotalArea>
          </InputArea>

          <ProductArea>
            <ProductsDetail>
              {cartItems.map((item) => (
                <ProductDetailArea key={item.id}>
                  <ProductDetailInfo>
                    <ProductImage src={item.thumbnail || IMG} />
                    <ProductName>{item.title}</ProductName>
                  </ProductDetailInfo>
                  <ProductPrice>
                    <span>R$</span>
                    {(item.price * item.quantity).toFixed(2)}
                  </ProductPrice>
                </ProductDetailArea>
              ))}
              <FullPriceArea>
                <PriceContainer>
                  <div>Subtotal</div>
                  <div>
                    <span>R$</span>
                    {subtotal.toFixed(2)}
                  </div>
                </PriceContainer>
                <PriceContainer>
                  <div>Frete</div>
                  <div>
                    <span>R$</span>
                    {frete.toFixed(2)}
                  </div>
                </PriceContainer>
                <PriceContainer borderbottom="none">
                  <div>Total</div>
                  <div>
                    <span>R$</span>
                    {total.toFixed(2)}
                  </div>
                </PriceContainer>
              </FullPriceArea>
            </ProductsDetail>

            <SelectRadioArea>
              <RadioArea>
                <RadioInput
                  id="credit"
                  name="PaymentType"
                  type="radio"
                  value="credit"
                  checked={paymentType === 'credit'}
                  onChange={(e) => setPaymentType(e.target.value)}
                />
                <RadioLabel htmlFor="credit">Cartão de Crédito</RadioLabel>
              </RadioArea>

              <FontAwesomeIcon
                size="2xl"
                icon={faPaypal}
                style={{ color: '#2c8ab7', marginLeft: '10px' }}
              />
            </SelectRadioArea>

            {paymentType === 'credit' && (
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'AUNY83_cBvnGTscdqPqsiouenuyXOjBTrD-5RHg60UMyEdSlSbiw3wlAYPRkVi2aFqbGykpkw2l44v4_',
                  currency: 'BRL',
                }}
              >
                <div style={{ marginTop: '15px', minHeight: '100px' }}>
                  <PayPalButtons
                    style={{ layout: 'vertical' }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: total.toFixed(2),
                              currency_code: 'BRL',
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        toast.success(
                          `Pagamento aprovado por ${details.payer.name.given_name}`,
                        );
                        clearCart();
                        navigate('/paymentfinished');
                      });
                    }}
                    onError={(err) => {
                      console.error(err);
                      toast.error('Ocorreu um erro no pagamento.');
                    }}
                  />
                </div>
              </PayPalScriptProvider>
            )}

            <SelectRadioArea>
              <RadioArea>
                <RadioInput
                  id="cash"
                  name="PaymentType"
                  type="radio"
                  value="cash"
                  checked={paymentType === 'cash'}
                  onChange={(e) => setPaymentType(e.target.value)}
                />
                <RadioLabel htmlFor="cash">Dinheiro na entrega</RadioLabel>
              </RadioArea>
            </SelectRadioArea>

            <CupomTotalArea>
              <CupomInputArea>
                <CupomInput
                  type="text"
                  placeholder="Código de Desconto"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  disabled={frete === 0}
                />
              </CupomInputArea>
              <Button buttonText="Aplicar Cupom" onClick={handleApplyCoupon} />
            </CupomTotalArea>

            {paymentType !== 'credit' && (
              <BuyButtonArea>
                <Button buttonText="Finalizar Compra" onClick={handleSubmit} />
              </BuyButtonArea>
            )}
          </ProductArea>
        </BillingArea>
      </PageContainer>
    </PageStyle>
  );
};
