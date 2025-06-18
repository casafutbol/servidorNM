import { TipoRespostaServidor } from "../TIPOS/TIPOS.Comunicacion.App";
import { adaptoToken } from "../FUNCIONS/funcions";

/**
 * Clase para manejar comunicación con el servidor
 */
export class Comunicacion {
  // Aquí guardamos la respuesta parseada (objeto JSON)
  static datos: any;
  static paxina: string;

  /**
   * Hace una petición GET y guarda la respuesta parseada en `datos`
   * @param endpoint URL a consultar
   */
  static async metodoGet(endpoint: string) {
    console.log("GET endpoint:", endpoint);
    const respuesta = await fetch(endpoint);
    this.datos = await respuesta.json();
    return this.datos;
  }

  /**
   * Hace una petición POST con datos JSON
   * @param endpoint URL a enviar el POST
   * @param datos Objeto con los datos a enviar
   * @returns El token recibido o null en error
   */
  static async metodoPost(endpoint: string, datos: any): Promise<string | null> {
    if (!datos || !datos.username) {
      console.error("El objeto 'datos' o la propiedad 'username' está vacío.", datos);
      return null;
    }

    const opciones: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    };

    const respuesta = await fetch(endpoint, opciones);
    const json = await respuesta.json();
    this.datos = json;

    if (json.token) {
      console.log("Token recibido:", json.token);
      return json.token;
    }

    console.error("No se recibió token en la respuesta");
    return null;
  }

  /**
   * Hace una petición PUT con autorización y datos JSON
   * @param endpoint URL a enviar PUT
   * @param datos Datos a enviar
   */
  static async metodoPut(endpoint: string, datos: any) {
    const opciones: RequestInit = {
      method: "PUT",
      headers: {
        Authorization: adaptoToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    };

    console.log("PUT datos:", datos, "endpoint:", endpoint);
    const respuesta = await fetch(`http://localhost:3000${endpoint}`, opciones);
    this.datos = await respuesta.json();
    console.log("Respuesta PUT:", this.datos);
  }

  /**
   * Hace un GET y guarda la respuesta en texto en `paxina`
   * @param endpoint URL a consultar
   * @param opciones Opciones fetch (opcional)
   */
  static async metodoPaxinaGet(endpoint: string, opciones?: RequestInit) {
    const respuesta = await fetch(endpoint, opciones);
    this.paxina = await respuesta.text();
    return this.paxina;
  }

  /**
   * Comprueba si el token es válido para considerar que el usuario está autenticado
   * @param token Token de autenticación
   */
  static isUser(token: string): boolean {
    if (token && token !== "Usuario o contraseña incorrectos") {
      localStorage.setItem("usuario", token);
      return true;
    }
    return false;
  }

  /**
   * Devuelve los datos JSON guardados
   */
  static get datoServidor() {
    return this.datos;
  }

  /**
   * Devuelve la página en texto guardada
   */
  static get Paxina() {
    return this.paxina;
  }
}