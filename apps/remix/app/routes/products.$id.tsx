import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';
import { useLoaderData, useLocation } from '@remix-run/react';
import { useEffect } from 'react';

import { getProduct } from '../.server/utils';
import { ProductCard } from '../components';

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
  const location = useLocation();

  useEffect(() => {
    dataLayerPush({
      event: Events.ProductPageLoad,
      page: {
        hash: location.hash,
        search: location.search,
      },
      product,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Product</h1>
      <section>
        <ProductCard attributes={['brand', 'price']} product={product} />
      </section>
    </>
  );
}
