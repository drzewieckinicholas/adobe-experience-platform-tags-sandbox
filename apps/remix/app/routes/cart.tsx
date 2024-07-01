import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import type { MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';

import { Layout } from '../components';

export const meta: MetaFunction = () => {
  return [{ title: 'Cart' }];
};

export default function Cart() {
  useEffect(() => {
    dataLayerPush({
      event: Events.CartPageLoad,
    });
  }, []);

  return <Layout heading='Cart' />;
}
