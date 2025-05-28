import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Para usar __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Middleware para parsear JSON y formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mostrar el login al entrar a /
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'login.html'));
});

// Usuarios simulados (puedes cambiar o usar BD)
const usuarios = [
  { email: 'user@example.com', password: '1234' },
];

// Recibir login por POST
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Faltan datos');
  }

  const user = usuarios.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).send('Credenciales incorrectas');
  }

  res.send('Login exitoso, ¡bienvenido!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
