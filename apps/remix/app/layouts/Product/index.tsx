import type { PropsWithChildren } from 'react';

import { BaseLayout } from '../';

export default function ProductLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout>
      <header>
        <h1>Product</h1>
      </header>
      <main>{children}</main>
    </BaseLayout>
  );
}
