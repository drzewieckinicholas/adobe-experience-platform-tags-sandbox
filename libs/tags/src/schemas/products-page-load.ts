import { z } from 'zod';

import { Events } from '../constants';
import { productSchema } from './product';

export const productsPageLoadSchema = z.object({
  event: z.literal(Events.ProductsPageLoad),
  products: z.array(productSchema),
});
