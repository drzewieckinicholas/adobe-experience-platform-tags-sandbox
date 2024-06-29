import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Products' }];
};

export default function Products() {
  return <h1>Products</h1>;
}
