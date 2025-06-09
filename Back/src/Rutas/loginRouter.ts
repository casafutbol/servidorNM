import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const datosPath = path.join(__dirname, "../../datos.json");


router.post('/', (req: Request, res: Response) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  let datos: any[] = [];
  if (fs.existsSync(datosPath)) {
    datos = JSON.parse(fs.readFileSync(datosPath, 'utf-8'));
  }

  const user = datos.find((u: any) => u.usuario === usuario && u.password === password);

  if (user) {
    return res.json({ message: 'Login correcto' });
  } else {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }
}); // <--- ESTA CIERRA EL router.post

export default router; // <--- ESTA VA FUERA DEL router.post
