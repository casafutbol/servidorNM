import express from 'express';
import path from 'path';

const app = express();

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.resolve('public')));

// Enviar el archivo index.html cuando accedas a la raíz "/"
app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

export default app;