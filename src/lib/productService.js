import api from './axios';

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