import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

export const useWishlist = () => {
  const { user, addToCart } = useAuth();
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const wishlistIds = user?.wishlist || [];
  const productsPerPage = 20;
  const totalPages = Math.ceil(wishlistProducts.length / productsPerPage);

  const isPromoProduct = (product) => {
    return product.id >= 121 && product.id <= 128;
  };

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      setLoading(true);
      try {
        const requests = wishlistIds.map((id) =>
          axios.get(`https://dummyjson.com/products/${id}`)
        );
        const responses = await Promise.all(requests);
        const data = responses.map((res) => res.data);
        setWishlistProducts(data);
      } catch (err) {
        console.error('Erro ao buscar produtos da wishlist:', err);
      } finally {
        setLoading(false);
      }
    };

    if (wishlistIds.length > 0) {
      fetchWishlistProducts();
    } else {
      setWishlistProducts([]);
      setLoading(false);
    }
  }, [wishlistIds]);

  useEffect(() => {
    setCurrentPage(1);
  }, [wishlistProducts.length]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = wishlistProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAddAllToCart = (navigate) => {
    const uniqueProducts = wishlistProducts.filter(
      (product, index, self) =>
        index === self.findIndex((p) => p.id === product.id)
    );
    uniqueProducts.forEach((product) => {
      addToCart(product, 1);
    });
    navigate('/cart');
  };

  return {
    wishlistProducts,
    loading,
    currentPage,
    totalPages,
    isHoveredLeft,
    setIsHoveredLeft,
    isHoveredRight,
    setIsHoveredRight,
    currentProducts,
    goToPage,
    handleAddAllToCart,
    isPromoProduct,
  };
};
