import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const rutaArchivo = path.resolve('C:/Users/alumnado/Desktop/Servidor/Back/datos.json');

  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
      console.error('Error leyendo archivo:', err);
      return res.status(500).send('Error interno');
    }
    try {
      const usuarios = JSON.parse(data);
      const usuarioValido = usuarios.find(u => u.email === email && u.password === password);

      if (usuarioValido) {
        res.status(200).send('Login correcto');
      } else {
        res.status(401).send('Email o contraseña incorrectos');
      }
    } catch (e) {
      console.error('Error parsing JSON:', e);
      res.status(500).send('Error interno');
    }
  });
});

export default router;
