import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const usePaymentPage = () => {
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
    return {};
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

  const onApprovePaypal = (details) => {
    toast.success(`Pagamento aprovado por ${details.payer.name.given_name}`);
    clearCart();
    navigate('/paymentfinished');
  };

  return {
    cartItems,
    subtotal,
    frete,
    total,
    paymentType,
    setPaymentType,
    formData,
    handleChange,
    coupon,
    setCoupon,
    handleApplyCoupon,
    handleSubmit,
    onApprovePaypal,
  };
};

export default usePaymentPage;
