import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // Para procesar formularios HTML
app.use(express.json()); // Para procesar JSON

app.post('/procesar-formulario', (req, res) => {
  const { trabajador, estado, vacaciones, email } = req.body;
  console.log('Datos recibidos:', req.body);
  res.send('Formulario recibido');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});