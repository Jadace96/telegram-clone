// routes
import { messagesRouter } from '../components/messages';

const appRoutes = [messagesRouter];

export const registerAppRoutes = (server) => {
  appRoutes.forEach((route) => server.use(route));
};
