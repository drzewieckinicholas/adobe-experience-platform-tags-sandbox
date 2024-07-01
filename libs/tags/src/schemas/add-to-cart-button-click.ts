import { z } from 'zod';

import { Events } from '../constants';
import { baseSchema } from './base';

export const addToCartButtonClickSchema = baseSchema.extend({
  event: z.literal(Events.AddToCartButtonClick),
});
