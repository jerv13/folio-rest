module.exports = function(server) {
  var restApiRoot = server.get('restApiRoot');
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get(restApiRoot, server.loopback.status());
  server.use(router);
};
