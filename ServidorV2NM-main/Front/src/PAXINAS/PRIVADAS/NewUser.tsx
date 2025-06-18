import React, { useState } from "react";
import "../../Componentes/PaxinaNewUser/index-newuser.css";
import Formulario from "../../Componentes/PaxinaNewUser/Formulario";
import Avatar from "../../Componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../Componentes/PaxinaNewUser/BotonEnviar";
import ImaxenEngranaxe from "../../Componentes/PaxinaNewUser/ImaxenEngranaxe";
import MenuLateral from "../../Componentes/MenuLateral";
import { Imaxes } from "../../assets/imaxes_newuser";

interface DatosFormulario {
  [key: string]: string;
}

export default function NewUser() {
  // Estado para guardar archivo imagen real
  const [imagenPerfil, setImagenPerfil] = useState<File | null>(null);
  // Estado para vista previa URL de la imagen
  const [previewImagen, setPreviewImagen] = useState<string>(Imaxes.avatar);
  // Estado para datos de formulario (strings)
  const [datosFormulario, setDatosFormulario] = useState<DatosFormulario>({});

  // Cambiar imagen y actualizar preview + archivo real
  const manejarCambioImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagenPerfil(file);
      setPreviewImagen(URL.createObjectURL(file));
    }
  };

  // Eliminar imagen y volver a avatar por defecto
  const eliminarImagen = () => {
    setImagenPerfil(null);
    setPreviewImagen(Imaxes.avatar);
  };

  // Manejar envío del formulario
  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in datosFormulario) {
      formData.append(key, datosFormulario[key]);
    }
    if (imagenPerfil) {
      formData.append("imagen", imagenPerfil);
    }

    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      console.log("Usuario creado correctamente:", json);
    } catch (err) {
      console.error("Error al crear usuario:", err);
    }
  };

  return (
    <div className="estilo-paxinas-app">
      <div className="newuser-container">
        <div className="formulario-container">
          <h2>Profile</h2>

          <div className="avatar-y-botones">
            <Avatar
              imagen={previewImagen}
              manejarCambioImagen={manejarCambioImagen}
              eliminarImagen={eliminarImagen}
            />
          </div>

          <Formulario onSubmit={setDatosFormulario} />
        </div>

        <div className="imagen-engranaje-container">
          <ImaxenEngranaxe />
          <BotonEnviar onClick={handleSubmit} />
        </div>
      </div>

      <MenuLateral url={1} />
    </div>
  );
}