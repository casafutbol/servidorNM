import express from 'express';
import * as path from 'path';

const app = express();
const PORT = 3000;

// Servir la carpeta "public"
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Página principal o de ejemplo
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

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> b79942a5842a8bd661b61c4130eae4b2510982ce
