const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use('/', createProxyMiddleware({
  target: 'https://api.themoviedb.org',
  changeOrigin: true
}));
app.listen(3000);
