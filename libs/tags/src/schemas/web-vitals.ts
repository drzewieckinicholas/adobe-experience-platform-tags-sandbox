import { z } from 'zod';

import { Events } from '../constants';
import { baseSchema } from './base';

const metricNames = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'] as const;
const metricRatings = ['good', 'needs-improvement', 'poor'] as const;

export const webVitalsSchema = baseSchema.extend({
  event: z.literal(Events.WebVitals),
  metric: z.object({
    delta: z.number(),
    id: z.string(),
    name: z.enum(metricNames),
    rating: z.enum(metricRatings),
    value: z.number(),
  }),
});
