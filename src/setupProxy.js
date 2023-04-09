const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/super-admin",
        createProxyMiddleware({
            target: "https://admin.doyup.shop/",
            changeOrigin: true,
        })
    );
};
