import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const datosPath = path.resolve(__dirname, '../../datos.json');

router.post('/', (req: Request, res: Response) => {
  const { usuario, password } = req.body as { usuario: string; password: string };

  if (!usuario || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  let datos = [];
  if (fs.existsSync(datosPath)) {
    datos = JSON.parse(fs.readFileSync(datosPath, 'utf-8'));
  }

  const user = datos.find((u: any) => u.usuario === usuario && u.password === password);

  if (user) {
    return res.json({ message: 'Login correcto' });
  } else {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }
});

export default router;
