import { sentencias } from "../Tipos/bbdd.tipos";

export const listaInstruccions: sentencias = {
  instruccion: {
    sqlLecturaUser: `SELECT name_user_traballador, pwd_traballador FROM TRABALLADOR WHERE name_user_traballador = ?`,
    sqlLogin: `SELECT name_user_traballador, pwd_traballador FROM TRABALLADOR WHERE name_user_traballador = ? AND pwd_traballador = ?`
  }
};
