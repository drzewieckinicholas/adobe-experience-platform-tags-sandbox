import { z } from 'zod';

import { Events } from '../constants';
import { baseSchema } from './base';

export const cartPageLoadSchema = baseSchema.extend({
  event: z.literal(Events.CartPageLoad),
});
