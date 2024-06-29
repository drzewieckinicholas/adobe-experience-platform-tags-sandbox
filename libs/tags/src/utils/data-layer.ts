import { ZodError } from 'zod';

import { dataSchema } from '../schemas';
import type { DataSchema } from '../types/schema';

export const dataLayerPush = (data: DataSchema) => {
  try {
    const result = dataSchema.parse(data);

    // @ts-expect-error To do.
    window.adobeDataLayer = window.adobeDataLayer || [];
    // @ts-expect-error To do.
    window.adobeDataLayer.push(result);

    return true;
  } catch (error) {
    console.error(
      'Error pushing data to Adobe Client Data Layer.',
      (error as ZodError).issues,
    );

    return false;
  }
};
