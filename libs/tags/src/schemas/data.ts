import { z } from 'zod';

import { homePageLoadSchema } from './home-page-load';
import { productPageLoadSchema } from './product-page-load';
import { productsPageLoadSchema } from './products-page-load';

export const dataSchema = z.discriminatedUnion('event', [
  homePageLoadSchema,
  productPageLoadSchema,
  productsPageLoadSchema,
]);
