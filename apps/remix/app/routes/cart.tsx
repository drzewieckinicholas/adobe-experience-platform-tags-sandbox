import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import type { MetaFunction } from '@remix-run/node';
import { useLocation } from '@remix-run/react';
import { useEffect } from 'react';

import { Layout } from '../components';

export const meta: MetaFunction = () => {
  return [{ title: 'Cart' }];
};

export default function Cart() {
  const location = useLocation();

  useEffect(() => {
    dataLayerPush({
      event: Events.CartPageLoad,
      page: {
        hash: location.hash,
        search: location.search,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Layout heading='Cart' />;
}
