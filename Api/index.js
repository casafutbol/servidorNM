const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.send('Servidor funcionando en Vercel');
});

module.exports = {
  handler: serverless(app),
  app
};