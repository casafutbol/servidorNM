import React, { useState, useEffect } from "react";
import Formulario from "../../Componentes/PaxinaNewUser/Formulario";
import Avatar from "../../Componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../Componentes/PaxinaNewUser/BotonEnviar";
import { DatosNewUser } from "../../TIPOS/INTERFACES.NewUser";
import { Imaxes } from "../../assets/imaxes_newuser"; 
import "../../Componentes/PaxinaNewUser/index-newuser.css";
import { endpoints, urlServidorPCTraballadores } from "../../DATOS/datos";

export default function NewUserAdri() {
  const [imagenPerfil, setImagenPerfil] = useState<string>(Imaxes.avatar);
  const [datosFormulario, setDatosFormulario] = useState<DatosNewUser>({
    nombre: "",
    apellidos: "",
    email: "",
    profesion: "",
    rol: "",
    imagen: null
  });

  // Liberar objeto URL para evitar leaks
  useEffect(() => {
    return () => {
      if (imagenPerfil && imagenPerfil !== Imaxes.avatar) {
        URL.revokeObjectURL(imagenPerfil);
      }
    };
  }, [imagenPerfil]);

  const manejarCambioImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagenPerfil(url);
      setDatosFormulario(prev => ({ ...prev, imagen: file }));
    }
  };

  const eliminarImagen = () => {
    if (imagenPerfil && imagenPerfil !== Imaxes.avatar) {
      URL.revokeObjectURL(imagenPerfil);
    }
    setImagenPerfil(Imaxes.avatar);
    setDatosFormulario(prev => ({ ...prev, imagen: null }));
  };

  const actualizarDatosFormulario = (datos: DatosNewUser) => {
    setDatosFormulario(datos);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("nombre", datosFormulario.nombre);
      formData.append("apellidos", datosFormulario.apellidos);
      formData.append("email", datosFormulario.email);
      formData.append("profesion", datosFormulario.profesion);
      formData.append("rol", datosFormulario.rol);
      if (datosFormulario.imagen) {
        formData.append("imagen", datosFormulario.imagen);
      }

      const res = await fetch(`${urlServidorPCTraballadores}/${endpoints.usuarios}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Error en la petición: ${res.statusText}`);
      }

      const json = await res.json();
      console.log("Usuario creado correctamente:", json);
      // Aquí podrías limpiar el formulario o mostrar mensaje de éxito
    } catch (err) {
      console.error("Error al crear usuario:", err);
      // Aquí podrías mostrar un mensaje de error en UI
    }
  };

  return (
    <div className="newuser-container">
      <div className="formulario-container">
        <h2>Profile</h2>
        <div className="avatar-bloque">
          <div className="avatar-contenedor">
            <Avatar
              imagen={imagenPerfil}
              manejarCambioImagen={manejarCambioImagen}
              eliminarImagen={eliminarImagen}
            />
          </div>
        </div>

        {/* Asegúrate que Formulario llama a onSubmit con los datos correctos */}
        <Formulario onSubmit={actualizarDatosFormulario} />

      </div>

      <div className="imagen-engranaxe-container">
        <div className="caja-imagen-blanca">
          <img src={Imaxes.engranaxe} alt="Engranaje" />
        </div>
        <BotonEnviar onClick={handleSubmit} />
      </div>
    </div>
  );
}