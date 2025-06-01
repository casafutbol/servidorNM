// Cargar variables de entorno desde el archivo .env
import 'dotenv/config'; // o: import dotenv from 'dotenv'; dotenv.config();

import express from 'express';
import * as path from 'path';

const app = express();

// Leer el puerto desde .env (con fallback a 3000)
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (ajusta si usas otra ruta)
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Ruta principal de ejemplo
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Servidor Básico</title></head>
      <body>
        <h1>Servidor en funcionamiento</h1>
        <p>¡Hola, mundo!</p>
      </body>
    </html>
  `);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});