import {
  dataLayerPush,
  Events,
} from '@adobe-experience-platform-tags-sandbox/tags';
import { type Metric, onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

let isInitialized = false;

const queue: Set<Metric> = new Set();

function addToQueue(metric: Metric) {
  queue.add(metric);
}

function flushQueue() {
  if (queue.size > 0) {
    const metrics = Array.from(queue);

    sendToDataLayer(metrics);

    queue.clear();
  }
}

function sendToDataLayer(metrics: Metric[]) {
  metrics.forEach((metric) => {
    const { delta, id, name, rating, value } = metric;

    dataLayerPush({
      event: Events.WebVitals,
      metric: {
        delta,
        id,
        name,
        rating,
        value,
      },
    });
  });
}

export function initWebVitals() {
  if (isInitialized) {
    console.warn('Web Vitals is already initialized.');

    return;
  }

  isInitialized = true;

  onCLS(addToQueue);
  onFCP(addToQueue);
  onINP(addToQueue);
  onLCP(addToQueue);
  onTTFB(addToQueue);

  addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flushQueue();
    }
  });

  addEventListener('pagehide', flushQueue);
}
