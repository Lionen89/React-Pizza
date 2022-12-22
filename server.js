const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middleweares = jsonServer.defaults({
  static: './build',
});
const PORT = process.env.PORT || 3004;

server.use(middleweares);
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});
