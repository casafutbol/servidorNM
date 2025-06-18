import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('C:/Users/alumnado/Desktop/Servidor/Back/registro.html'));
});

app.post('/registro', (req, res) => {
  // tu código para guardar usuario en datos.json
});

app.get('/usuarios', (req, res) => {
  const rutaArchivo = path.resolve('C:/Users/alumnado/Desktop/Servidor/Back/datos.json');
  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error leyendo usuarios');
    try {
      const usuarios = JSON.parse(data);
      res.json(usuarios);
    } catch {
      res.json([]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
