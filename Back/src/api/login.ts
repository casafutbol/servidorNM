import * as fs from 'fs';
import { Request, Response } from 'express';
import router from './auth';

const datosPath = './ruta/a/tu/archivo/datos.json'; // Cambia esta ruta al archivo real de datos
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
