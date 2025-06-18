import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// Servir archivos estáticos HTML desde la carpeta api
app.use(express.static(path.resolve('C:/Users/alumnado/Desktop/Servidor/Back/api')));

// Ruta POST registro
app.post('/registro', (req, res) => {
  const nuevoUsuario = req.body;
  const rutaArchivo = path.resolve('C:/Users/alumnado/Desktop/Servidor/Back/datos.json');

  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    let usuarios = [];
    if (!err && data) {
      try {
        usuarios = JSON.parse(data);
        if (!Array.isArray(usuarios)) usuarios = [];
      } catch {
        usuarios = [];
      }
    }

    const existe = usuarios.find(u => u.email === nuevoUsuario.email);
    if (existe) {
      return res.status(400).send('Email ya registrado');
    }

    usuarios.push(nuevoUsuario);
    fs.writeFile(rutaArchivo, JSON.stringify(usuarios, null, 2), (err) => {
      if (err) {
        console.error('Error guardando datos:', err);
        return res.status(500).send('Error interno');
      }
      res.status(200).send('Usuario registrado correctamente');
    });
  });
});

// Ruta POST login
app.post('/login', (req, res) => {
  const {email, password} = req.body;
  const rutaArchivo = path.resolve('C:/Users/alumnado/Desktop/Servidor/Back/datos.json');

  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error leyendo usuarios');
    try {
      const usuarios = JSON.parse(data);
      const usuario = usuarios.find(u => u.email === email && u.password === password);
      if (usuario) {
        res.status(200).send('Login correcto');
      } else {
        res.status(401).send('Usuario o contraseña incorrectos');
      }
    } catch {
      res.status(500).send('Error interno');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

