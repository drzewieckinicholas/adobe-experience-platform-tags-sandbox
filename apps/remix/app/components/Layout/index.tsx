import type { PropsWithChildren } from 'react';

import { Header, WithNav } from '..';

interface LayoutProps extends PropsWithChildren {
  heading: string;
}

export default function Layout({ children, heading }: LayoutProps) {
  return (
    <>
      <WithNav />
      <Header heading={heading} />
      <main>{children}</main>
    </>
  );
}
