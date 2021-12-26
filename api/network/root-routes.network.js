const { messagesRouter } = require('../components/messages');

const routes = [messagesRouter];

const rootRoutes = (server) => {
  routes.forEach((route) => server.use(route));
};

module.exports = rootRoutes;
