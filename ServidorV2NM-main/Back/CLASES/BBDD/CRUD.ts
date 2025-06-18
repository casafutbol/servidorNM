import { Database } from "sqlite";
import { datoUser, promesaEDatos } from "../../Tipos/bbdd.tipos";

export class CRUD {
    private conexion: Promise<Database>;

    constructor(conexion: Promise<Database>) {
        this.conexion = conexion;
    }

    async insertar(sentenciaSQL: string): Promise<void> {
        try {
            await (await this.conexion).run(sentenciaSQL);
        } catch (e) {
            throw e;
        }
    }

    async lerUnhaFila(sentenciaSQL: string, valorCampo: string): Promise<datoUser> {
        try {
            const dato = await (await this.conexion).get(sentenciaSQL, [valorCampo]);
            console.log("dato en funcion ler ", dato);
            return dato;
        } catch (e) {
            throw new Error("Entrada no válida");
        }
    }

    async lerUnhaFila2Campos(sentenciaSQL: string, valorCampo: [string, string]): Promise<datoUser> {
        try {
            const dato = await (await this.conexion).get(sentenciaSQL, valorCampo);
            return dato;
        } catch (e) {
            throw e;
        }
    }

    async lerTodasAsFilas(sentenciaSQL: string): Promise<datoUser[]> {
        try {
            return await (await this.conexion).all(sentenciaSQL);
        } catch (e) {
            throw e;
        }
    }
}
