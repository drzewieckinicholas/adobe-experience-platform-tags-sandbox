import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  price: z.number(),
  quantity: z.number(),
  title: z.string(),
});
