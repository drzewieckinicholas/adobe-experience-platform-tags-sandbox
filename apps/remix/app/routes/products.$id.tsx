import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

import { getProduct } from '../.server/utils';
import { Layout, ProductCard } from '../components';

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

  useEffect(() => {
    dataLayerPush({
      event: Events.ProductPageLoad,
      product,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    dataLayerPush({
      event: Events.AddToCartButtonClick,
    });
  };

  return (
    <Layout heading='Product'>
      <section>
        <ProductCard attributes={['brand', 'price']} product={product} />
        <button onClick={handleClick}>Add to Cart</button>
      </section>
    </Layout>
  );
}
