import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Servir la carpeta "public"
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Página con el reproductor
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Video Servido</title></head>
      <body style="text-align: center; font-family: Arial;">
        <h1>Video: Rotura de tubería en O Milladoiro</h1>
        <video width="640" height="360" controls>
          <source src="/video.mp4" type="video/mp4">
          Tu navegador no soporta video HTML5.
        </video>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
