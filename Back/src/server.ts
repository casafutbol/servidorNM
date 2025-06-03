import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const publicPath = path.resolve('public');
const archivoDatos = path.resolve('datos.json');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mostrar formulario al acceder a /
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'formulario.html'));
});

// Procesar datos enviados por el formulario
app.post('/procesar-formulario', (req, res) => {
  const nuevoDato = req.body;

  // Leer datos existentes (si el archivo existe)
  let datos = [];
  if (fs.existsSync(archivoDatos)) {
    const contenido = fs.readFileSync(archivoDatos, 'utf-8');
    datos = JSON.parse(contenido);
  }

  // Añadir nuevo dato
  datos.push(nuevoDato);

  // Guardar de nuevo el archivo con el nuevo dato añadido
  fs.writeFileSync(archivoDatos, JSON.stringify(datos, null, 2));

  console.log('Datos guardados:', nuevoDato);
  res.send('Datos guardados en archivo JSON correctamente');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

export default app;
