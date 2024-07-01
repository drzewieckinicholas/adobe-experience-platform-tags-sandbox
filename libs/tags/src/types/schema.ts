import { z } from 'zod';

import {
  addToCartButtonClickSchema,
  cartPageLoadSchema,
  homePageLoadSchema,
  productPageLoadSchema,
  productsPageLoadSchema,
} from '../schemas';

type AddToCartButtonClickSchema = z.infer<typeof addToCartButtonClickSchema>;
type CartPageLoadSchema = z.infer<typeof cartPageLoadSchema>;
type HomePageLoadSchema = z.infer<typeof homePageLoadSchema>;
type ProductPageLoadSchema = z.infer<typeof productPageLoadSchema>;
type ProductsPageLoadSchema = z.infer<typeof productsPageLoadSchema>;

export type DataSchema =
  | AddToCartButtonClickSchema
  | CartPageLoadSchema
  | HomePageLoadSchema
  | ProductPageLoadSchema
  | ProductsPageLoadSchema;
