import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getProducts } from '../.server/utils';
import { ProductCard } from '../components';

export const loader = async () => {
  const products = await getProducts();

  return json({ products });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Products' }];
};

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Products</h1>
      <section>
        {products.map((product) => (
          <ProductCard
            attributes={['brand', 'price']}
            key={product.id}
            product={product}
            titleAs='link'
          />
        ))}
      </section>
    </>
  );
}
