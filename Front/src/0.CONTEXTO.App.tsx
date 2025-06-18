import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LocalContextType } from './TIPOS/INTERFACES.App';
import { Comunicacion } from './COMUNICACION.HTTP/Comunicacion.App';
import { endpoints, urlServidorLocal } from './DATOS/datos';

// Contexto con valor por defecto para evitar null checks
export const LocalContext = createContext<LocalContextType>({
  login: async () => {},
  logout: () => {},
  isUserLogueado: false
});

function Proveedorcontexto({ children }: { children: React.ReactNode }) {
  const [isUserLogueado, setIsUserLogueado] = useState(false);
  const navigate = useNavigate();

  // Al montar el componente, chequea si hay token en localStorage para mantener sesión
  useEffect(() => {
    const token = localStorage.getItem('usuario');
    if (token) {
      setIsUserLogueado(true);
    }
  }, []);

  const login = async (dato: any) => {
    try {
      const oToken = await Comunicacion.metodoPost(`${urlServidorLocal}/${endpoints.acceso}`, dato);
      if (oToken && Comunicacion.isUser(oToken)) {
        setIsUserLogueado(true);
        navigate('/app');
      } else {
        setIsUserLogueado(false);
        // Opcional: mostrar mensaje de error o manejar fallo login
        console.error('Login fallido: token inválido');
      }
    } catch (error) {
      console.error('Error en login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('usuario');
    setIsUserLogueado(false);
    navigate('/');
  };

  return (
    <LocalContext.Provider value={{ login, logout, isUserLogueado }}>
      {children}
    </LocalContext.Provider>
  );
}

export { Proveedorcontexto };