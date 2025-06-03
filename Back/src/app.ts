import express from 'express';
import path from 'path';
import sqlite3 from 'sqlite3';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

const db = new sqlite3.Database(path.resolve('db', 'novomilladoiro.db'), (err) => {
  if (err) {
    console.error('Error en DB:', err.message);
  } else {
    console.log('Base SQLite conectada');
  }
});

app.post('/guardar-usuario', (req, res) => {
  const { nombre, email } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
  db.run(sql, [nombre, email], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error al guardar usuario' });
      return;
    }
    res.json({ mensaje: 'Usuario guardado', id: this.lastID });
  });
});

export default app;
