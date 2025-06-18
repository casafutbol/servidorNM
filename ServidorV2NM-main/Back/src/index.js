import express from "express";
import loginRouter from "./Rutas/loginRouter.js";
import registroRouter from "./Rutas/registroRouter.js";
import usuariosRouter from "./Rutas/usuariosRouter.js";

const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Configuración de rutas
app.use("/login", loginRouter);
app.use("/registro", registroRouter);
app.use("/usuarios", usuariosRouter);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

