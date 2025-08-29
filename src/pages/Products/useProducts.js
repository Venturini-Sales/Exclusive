import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { fetchProductById, fetchProductsByCategory } from '../../services/productService';

export const useProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, toggleWishlistItem, isInWishlist, addToCart } = useAuth();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const hasPromo = location.state?.hasPromo ?? false;

  const handleAddToCart = () => {
    if (!user) {
      navigate('/signup');
      return;
    }

    addToCart(
      {
        id: product.id,
        title: product.title,
        price: hasPromo
          ? product.price * (1 - product.discountPercentage / 100)
          : product.price,
        thumbnail: product.thumbnail,
      },
      count,
      navigate('/cart')
    );
  };

  const handleWishlistClick = () => {
    if (!user) {
      navigate('/signup');
      return;
    }
    toggleWishlistItem(product.id);
  };

  const isWishlisted = isInWishlist(product?.id);

  useEffect(() => {
    async function loadProductAndRelated() {
      setLoading(true);
      const { response: productData, statusCode } = await fetchProductById(id);
      if (statusCode === 200) {
        setProduct(productData);

        const category = productData.category;
        const { response: categoryProducts, statusCode: catStatus } =
          await fetchProductsByCategory(category);

        if (catStatus === 200) {
          const currentId = Number(productData.id);
          const filtered = categoryProducts.filter(
            (p) => Number(p.id) !== currentId
          );

          const shuffled = filtered.sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, 4);

          setRelatedProducts(selected);
        }
      }
      setLoading(false);
      setCount(1);
    }

    loadProductAndRelated();
  }, [id]);

  return {
    product,
    relatedProducts,
    loading,
    count,
    setCount,
    hasPromo,
    handleAddToCart,
    handleWishlistClick,
    isWishlisted,
  };
};
