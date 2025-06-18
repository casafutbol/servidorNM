import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";

import { datoUser } from "../../Tipos/bbdd.tipos";
import { isUserForm } from "../../helpers";

export const accesoUser = async (req: Request, res: Response): Promise<void> => {
  const { username, pwd } = req.body;

  if (!username || !pwd) {
    return res.status(400).json({ mensaje: "Faltan credenciales" });
  }

  try {
    const instanciaBBDD = execucionTodoBBDD();
    const datoUserLido: datoUser = await instanciaBBDD.lerUnhaFila(
      listaInstruccions.instruccion.sqlLecturaUser,
      username
    );

    const usuarioValido = isUserForm(req.body, datoUserLido);

    if (!usuarioValido || !datoUserLido) {
      return res.status(401).json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    const token = Jwt.sign(
      { user: username },
      process.env.SEGREDO || "clavePorDefecto",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error al autenticar al usuario:", error);
    res.status(500).send("Error interno del servidor");
  }
};