import { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const useCart = () => {
  const { user, updateCartQuantity, removeFromCart } = useAuth();

  const [coupon, setCoupon] = useState('');
  const [isFreteGratis, setIsFreteGratis] = useState(false);

  const cartItems = user?.cart || [];

  const subtotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );

  const frete = useMemo(
    () => (isFreteGratis ? 0 : cartItems.length > 0 ? 20 : 0),
    [cartItems, isFreteGratis]
  );

  const total = useMemo(() => subtotal + frete, [subtotal, frete]);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'FG2025') {
      setIsFreteGratis(true);
      toast.success('Cupom aplicado! Frete grátis ativado.');
    } else {
      setIsFreteGratis(false);
      toast.error('Cupom inválido.');
    }
  };

  const incrementQuantity = (itemId, currentQuantity) => {
    updateCartQuantity(itemId, currentQuantity + 1);
  };

  const decrementQuantity = (itemId, currentQuantity) => {
    const newQuantity = currentQuantity - 1;
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartQuantity(itemId, newQuantity);
    }
  };

  const changeQuantity = (itemId, value) => {
    const newQuantity = parseInt(value, 10) || 0;
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartQuantity(itemId, newQuantity);
    }
  };

  return {
    cartItems,
    coupon,
    setCoupon,
    isFreteGratis,
    subtotal,
    frete,
    total,
    applyCoupon,
    incrementQuantity,
    decrementQuantity,
    changeQuantity,
  };
};

export default useCart;
