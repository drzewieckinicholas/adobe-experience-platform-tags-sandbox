import {
  dataLayerPush,
  Events,
} from '@adobe-experience-platform-tags-sandbox/tags';
import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

import { getProducts } from '../.server/utils';
import { Layout, ProductCard } from '../components';

export const loader = async () => {
  const products = await getProducts();

  return json({ products });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Products' }];
};

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  useEffect(() => {
    dataLayerPush({
      event: Events.ProductsPageLoad,
      products,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout heading='Products'>
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
    </Layout>
  );
}
