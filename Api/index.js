// api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando en Vercel');
});

module.exports = app;