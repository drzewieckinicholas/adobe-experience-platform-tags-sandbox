import { ZodError } from 'zod';

import { dataSchema } from '../schemas';
import type { DataSchema } from '../types/schema';

declare const window: Window & { adobeDataLayer: unknown[] };

export const dataLayerPush = (data: DataSchema) => {
  try {
    const result = dataSchema.parse(data);

    window.adobeDataLayer = window.adobeDataLayer || [];
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
