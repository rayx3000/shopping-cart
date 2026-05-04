export const getProducts = async () => {
  try {
    const cachedProducts = localStorage.getItem('products');
    if (cachedProducts) {
      return JSON.parse(cachedProducts);
    }

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    localStorage.setItem('products', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};