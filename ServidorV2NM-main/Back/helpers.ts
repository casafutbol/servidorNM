import Jwt from "jsonwebtoken";
import { datoUser, promesaEDatos } from "./Tipos/bbdd.tipos";
import { formAcceso } from "./Tipos/tipos.app";

const isUserForm = (userFormAcceso: formAcceso, usuarioBBDD: datoUser): boolean => {
    return userFormAcceso.username === usuarioBBDD.NAME_USER_TRABALLADOR &&
           userFormAcceso.pwd === usuarioBBDD.PWD_TRABALLADOR;
};

const isUser2 = async (userFormAcceso: formAcceso, usuarioBBDDPromise: promesaEDatos): Promise<boolean> => {
    const usuarioBBDD = await usuarioBBDDPromise;
    if (usuarioBBDD && typeof usuarioBBDD === 'object' && 'NAME_USER_TRABALLADOR' in usuarioBBDD) {
        console.log(usuarioBBDD.NAME_USER_TRABALLADOR);
        return true;
    } else {
        console.log("usuario no es un datoUser válido");
        return false;
    }
};

export {
    isUserForm,
    isUser2
};
