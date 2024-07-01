import { z } from 'zod';

import { cartPageLoadSchema } from './cart-page-load';
import { homePageLoadSchema } from './home-page-load';
import { productPageLoadSchema } from './product-page-load';
import { productsPageLoadSchema } from './products-page-load';

export const dataSchema = z.discriminatedUnion('event', [
  cartPageLoadSchema,
  homePageLoadSchema,
  productPageLoadSchema,
  productsPageLoadSchema,
]);
