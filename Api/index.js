const express = require('express');
const app = express();
const serverless = require('serverless-http');

// Define tus rutas aquí
app.get('/', (req, res) => {
  res.send('Servidor funcionando en Vercel');
});

// Exporta como función serverless (sin app.listen)
module.exports.handler = serverless(app);
