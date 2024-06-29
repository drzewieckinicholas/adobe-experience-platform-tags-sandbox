import { z } from 'zod';

import { Events } from '../constants';

export const homePageLoadSchema = z.object({
  event: z.literal(Events.HomePageLoad),
});
