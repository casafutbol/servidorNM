import { Request, Response } from 'express';
import { conectarDB } from '../../configuracion.sqlite';

export const putCustomers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  console.log("ID:", id);
  console.log("Body:", req.body);

  // Validación básica de campos
  if (!id || !name || !email || !role) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  const datosEntrada: [string, string, string, string] = [name, email, role, id];

  try {
    const db = await conectarDB();

    await db.run(
      "UPDATE CUSTOMERS SET NAME = ?, EMAIL = ?, ROLE = ? WHERE id = ?",
      datosEntrada
    );

    res.send({ mensaje: "Datos modificados correctamente" });
  } catch (error) {
    console.error("Error en putCustomers:", error);
    res.status(500).json({ error: "Error al modificar los datos del cliente" });
  }
};