import type { PropsWithChildren } from 'react';

import { WithNav } from '../../components';

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <WithNav />
      {children}
    </>
  );
}
