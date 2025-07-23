import api from '../lib/axios';

export const fetchProducts = async () => {
  try {
    const [smartphonesResponse, tabletsResponse, laptopsResponse] = await Promise.all([
      api.get('/products/category/smartphones'),
      api.get('/products/category/tablets'),
      api.get('/products/category/laptops')
    ]);

    const combinedProducts = [
      ...smartphonesResponse.data.products,
      ...tabletsResponse.data.products,
      ...laptopsResponse.data.products
    ];

    return { response: combinedProducts, statusCode: smartphonesResponse.status };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { response: error.response.data, statusCode: error.response.status };
  }
};


export const fetchProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return { response: response.data.products, statusCode: response.status };
  } catch (error) {
    console.error('Error fetching category products:', error);
    return { response: error.response?.data, statusCode: error.response?.status || 500 };
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return { response: response.data, statusCode: response.status };
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return { response: error.response?.data, statusCode: error.response?.status || 500 };
  }
};