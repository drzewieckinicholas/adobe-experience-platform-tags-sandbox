import { z } from 'zod';

import {
  homePageLoadSchema,
  productPageLoadSchema,
  productsPageLoadSchema,
} from '../schemas';

type HomePageLoadSchema = z.infer<typeof homePageLoadSchema>;
type ProductPageLoadSchema = z.infer<typeof productPageLoadSchema>;
type ProductsPageLoadSchema = z.infer<typeof productsPageLoadSchema>;

export type DataSchema =
  | HomePageLoadSchema
  | ProductPageLoadSchema
  | ProductsPageLoadSchema;
