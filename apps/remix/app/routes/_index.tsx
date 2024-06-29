import { dataLayerPush, Events } from '@adobe-experience-platform-tags/tags';
import type { MetaFunction } from '@remix-run/node';
import { useLocation } from '@remix-run/react';
import { useEffect } from 'react';

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }];
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    dataLayerPush({
      event: Events.HomePageLoad,
      page: {
        hash: location.hash,
        search: location.search,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Home</h1>;
}
