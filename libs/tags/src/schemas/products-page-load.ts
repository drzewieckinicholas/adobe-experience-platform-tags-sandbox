import { z } from 'zod';

import { Events } from '../constants';
import { baseSchema } from './base';
import { productSchema } from './product';

export const productsPageLoadSchema = baseSchema.extend({
  event: z.literal(Events.ProductsPageLoad),
  products: z.array(productSchema),
});
