// routes
import { userRouter } from '../components/user';
import { messagesRouter } from '../components/messages';

const appRoutes = [userRouter, messagesRouter];

export const registerAppRoutes = (server) => {
  appRoutes.forEach((route) => server.use(route));
};
