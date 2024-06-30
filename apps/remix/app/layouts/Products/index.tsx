import type { PropsWithChildren } from 'react';

import { BaseLayout } from '../';

export default function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout>
      <header>
        <h1>Products</h1>
      </header>
      <main>{children}</main>
    </BaseLayout>
  );
}
