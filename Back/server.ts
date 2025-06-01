import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});