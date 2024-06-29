import type { Product } from '../../types';

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`http://localhost:3000/products/${id}`);

  if (!response.ok) {
    throw new Error('Product not found.');
  }

  const product = (await response.json()) as Product;

  return product;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:3000/products');

  if (!response.ok) {
    throw new Error('Products not found.');
  }

  const products = (await response.json()) as Product[];

  return products;
};
