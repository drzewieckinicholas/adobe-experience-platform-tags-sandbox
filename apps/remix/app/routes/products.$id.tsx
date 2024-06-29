import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Product' }];
};

export default function Product() {
  return <h1>Product</h1>;
}
