import { z } from 'zod';

import { Events } from '../constants';
import { baseSchema } from './base';
import { productSchema } from './product';

export const productPageLoadSchema = baseSchema.extend({
  event: z.literal(Events.ProductPageLoad),
  product: productSchema,
});
