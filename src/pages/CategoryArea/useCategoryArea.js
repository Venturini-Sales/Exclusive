import { useEffect, useState } from 'react';
import {
  fetchAllProductsFiltered,
  fetchProductsByCategory,
} from '../../services/productService';
import { useLocation } from 'react-router-dom';

const useCategoryArea = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || '';

  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 20;

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isPromoProduct = (product) => {
    return product.id >= 121 && product.id <= 128;
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      let response = [];
      let statusCode = 200;

      if (selectedCategory === '') {
        ({ response, statusCode } = await fetchAllProductsFiltered());
      } else if (selectedCategory === 'promoção') {
        ({ response, statusCode } = await fetchAllProductsFiltered());
        if (statusCode === 200) {
          response = response.filter(
            (product) => product.id >= 121 && product.id <= 128,
          );
        }
      } else {
        ({ response, statusCode } = await fetchProductsByCategory(
          selectedCategory,
        ));
      }

      if (statusCode === 200) {
        setProducts(response);
      } else {
        setProducts([]);
      }

      setLoading(false);
    };

    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentPage]);

  const skeletonCount =
    selectedCategory === 'promoção' ? 8 : productsPerPage;

  return {
    isHoveredLeft,
    setIsHoveredLeft,
    isHoveredRight,
    setIsHoveredRight,
    products,
    loading,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    productsPerPage,
    handleCategoryChange,
    currentProducts,
    totalPages,
    goToPage,
    isPromoProduct,
    skeletonCount,
  };
};

export default useCategoryArea;
