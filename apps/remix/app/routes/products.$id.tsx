import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getProduct } from '../.server/utils';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  const product = await getProduct(id as string);

  return json({ product });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Product' }];
};

export default function Product() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Product</h1>
      <section>
        <article>
          <h2>{product.title}</h2>
          <dl>
            <dt>Brand</dt>
            <dd>{product.brand}</dd>
            <dt>Price</dt>
            <dd>{product.price.toFixed(2)}</dd>
          </dl>
        </article>
      </section>
    </>
  );
}
