import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getProducts } from '../.server/utils';

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
        {products.map(({ brand, id, price, title }) => (
          <article key={id}>
            <h2>{title}</h2>
            <dl>
              <dt>Brand</dt>
              <dd>{brand}</dd>
              <dt>Price</dt>
              <dd>{price.toFixed(2)}</dd>
            </dl>
          </article>
        ))}
      </section>
    </>
  );
}
