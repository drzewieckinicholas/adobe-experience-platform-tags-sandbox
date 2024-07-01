import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import type { MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';

import { Layout } from '../components';

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }];
};

export default function Home() {
  useEffect(() => {
    dataLayerPush({
      event: Events.HomePageLoad,
    });
  }, []);

  return (
    <Layout heading='Home'>
      <section>
        <h2>Introduction</h2>
        <p>Welcome to Adobe Experience Platform Tags Sandbox 👋</p>
      </section>
    </Layout>
  );
}
