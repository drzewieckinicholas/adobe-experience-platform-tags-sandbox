import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';
import { Link, useLoaderData, useLocation } from '@remix-run/react';
import { useEffect } from 'react';

import { getProduct } from '../.server/utils';
import { ProductCard } from '../components';
import { ProductLayout } from '../layouts';

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
    <ProductLayout>
      <section>
        <ProductCard attributes={['brand', 'price']} product={product} />
        <Link prefetch='intent' to='/products' unstable_viewTransition>
          Back to Products
        </Link>
      </section>
    </ProductLayout>
  );
}
