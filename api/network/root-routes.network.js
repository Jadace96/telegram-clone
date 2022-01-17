// routes
import { userRouter } from '../components/user';

const appRoutes = [userRouter];

export const registerAppRoutes = (server) => {
  appRoutes.forEach((route) => server.use(route));
};
