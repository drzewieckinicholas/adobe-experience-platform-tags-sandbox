import { z } from 'zod';

import { pageSchema } from './page';

export const baseSchema = z.object({
  event: z.string(),
  page: pageSchema,
});
