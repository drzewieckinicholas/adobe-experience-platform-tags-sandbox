import { z } from 'zod';

import { addToCartButtonClickSchema } from './add-to-cart-button-click';
import { cartPageLoadSchema } from './cart-page-load';
import { homePageLoadSchema } from './home-page-load';
import { productPageLoadSchema } from './product-page-load';
import { productsPageLoadSchema } from './products-page-load';
import { webVitalsSchema } from './web-vitals';

export const dataSchema = z.discriminatedUnion('event', [
  addToCartButtonClickSchema,
  cartPageLoadSchema,
  homePageLoadSchema,
  productPageLoadSchema,
  productsPageLoadSchema,
  webVitalsSchema,
]);
