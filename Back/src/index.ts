import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import usuariosRouter from './Rutas/usuariosRouter.js';
import loginRouter from './Rutas/loginRouter.js';
import registroRouter from './Rutas/registroRouter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

// ✅ Ruta raíz para Vercel (antes del listen)
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head><meta charset="UTF-8"><title>Servidor NM</title></head>
      <body style="font-family:sans-serif;text-align:center;padding:40px;">
        <h1>✅ Servidor NM operativo</h1>
        <p>Vista previa generada desde la raíz /</p>
      </body>
    </html>
  `);
});

// Rutas de API
app.use('/api/registro', registroRouter);
app.use('/api/login', loginRouter);
app.use('/api/usuarios', usuariosRouter);

// ✅ Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
