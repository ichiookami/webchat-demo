const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/chat", {
      target: "ws://localhost:8000",
      ws: true,
      changeOrigin: true,
    })
  );
};
