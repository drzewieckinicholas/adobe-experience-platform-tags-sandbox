import { z } from 'zod';

import {
  addToCartButtonClickSchema,
  cartPageLoadSchema,
  homePageLoadSchema,
  productPageLoadSchema,
  productsPageLoadSchema,
  webVitalsSchema,
} from '../schemas';

type AddToCartButtonClickSchema = z.infer<typeof addToCartButtonClickSchema>;
type CartPageLoadSchema = z.infer<typeof cartPageLoadSchema>;
type HomePageLoadSchema = z.infer<typeof homePageLoadSchema>;
type ProductPageLoadSchema = z.infer<typeof productPageLoadSchema>;
type ProductsPageLoadSchema = z.infer<typeof productsPageLoadSchema>;
type WebVitalsSchema = z.infer<typeof webVitalsSchema>;

export type DataSchema =
  | AddToCartButtonClickSchema
  | CartPageLoadSchema
  | HomePageLoadSchema
  | ProductPageLoadSchema
  | ProductsPageLoadSchema
  | WebVitalsSchema;
