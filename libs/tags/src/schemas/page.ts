import { z } from 'zod';

export const pageSchema = z.object({
  hash: z.string(),
  search: z.string(),
});
