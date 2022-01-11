// vendors
import open from 'open';

// constants
import { config } from '../config';

export const openLocalhostInChrome = async () =>
  await open(config.localhost, {
    app: { name: open.apps.chrome },
  });
