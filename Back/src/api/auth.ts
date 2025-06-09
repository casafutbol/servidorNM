// src/auth.ts
import { Router, Request, Response } from 'express';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '../db/novomilladoiro.sqlite');

router.post('/login', async (req: Request, res: Response) => {
  const { usuario, password } = req.body;

  try {
    const db = await open({ filename: dbPath, driver: sqlite3.Database });
    const user = await db.get(
      'SELECT * FROM usuarios WHERE nombre = ? AND password = ?',
      [usuario, password]
    );

    if (user) {
      res.json({ success: true, message: 'Login correcto' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error de login:', error);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

export default router;