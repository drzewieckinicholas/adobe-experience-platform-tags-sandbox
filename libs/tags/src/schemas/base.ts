import { z } from 'zod';

export const baseSchema = z.object({
  event: z.string(),
});
