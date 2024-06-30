import type { PropsWithChildren } from 'react';

import { BaseLayout } from '../';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout>
      <header>
        <h1>Home</h1>
      </header>
      <main>{children}</main>
    </BaseLayout>
  );
}
