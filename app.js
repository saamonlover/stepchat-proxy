const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://api.stepfun.com/v1",
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "",
    },
  })
);

app.listen(3001);

console.log("Server is running on port 3001");
