import { z } from 'zod';

import { Events } from '../constants';
import { productSchema } from './product';

export const productPageLoadSchema = z.object({
  event: z.literal(Events.ProductPageLoad),
  product: productSchema,
});
