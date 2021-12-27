// vendors
import open from 'open';

// constants
import { devEnv } from '../constants';

export const openLocalhostInChrome = async () =>
  await open(devEnv.localhost, {
    app: { name: open.apps.chrome },
  });
