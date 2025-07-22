import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from '../../services/productService';

const useHome = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    const loadProducts = async () => {
      try {
        const { response, statusCode } = await fetchProducts();
        setProducts(response);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      loadProducts();
    }, []);
  
    const dataSections = [
      'Moda feminina',
      'Moda Masculina',
      'Eletronicos',
      'Casa e Bem-Estar',
      'Cuidados Pessoais',
      'Esportes e Atividades',
      'Fragâncias',
      'Acessórios eletronicos',
    ];
  
  return {dataSections, loadProducts, products, loading, navigate}
}

export default useHome