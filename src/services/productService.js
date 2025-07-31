import api from '../lib/axios';

const excludedCategories = ['groceries', 'motorcycle', 'vehicle', 'tops'];

export const fetchAllProductsFiltered = async () => {
  try {
    const initial = await api.get('/products?limit=0');
    const total = initial.data.total;

    const limit = 30;
    const requests = [];

    for (let skip = 0; skip < total; skip += limit) {
      requests.push(api.get(`/products?limit=${limit}&skip=${skip}`));
    }

    const responses = await Promise.all(requests);
    const allProducts = responses.flatMap(res => res.data.products);

    // Filtrar os produtos excluindo as categorias indesejadas
    const filteredProducts = allProducts.filter(
      product => !excludedCategories.includes(product.category)
    );

    return { response: filteredProducts, statusCode: 200 };
  } catch (error) {
    console.error('Error fetching all products:', error);
    return { response: error.response?.data, statusCode: error.response?.status || 500 };
  }
};


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