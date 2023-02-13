const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/super-admin",
    createProxyMiddleware({
      target: "http://3.37.88.125:8081",
      changeOrigin: true,
    })
  );
};
